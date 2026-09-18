"""Replace only the border-connected neutral studio backdrop.
No generation, skin retouching, global grading, or subject colour changes.
Requires Pillow, numpy, opencv-python. Original JPEG is never overwritten.
"""
from pathlib import Path
import hashlib,json
import cv2
import numpy as np
import onnxruntime as ort
from PIL import Image
ROOT=Path(__file__).resolve().parents[1]

def build():
 source=ROOT/'public/images/iyan-barry-cio.jpg'
 image=np.array(Image.open(source).convert('RGB'));rgb=image.astype(np.int16)
 # A human mask protects white clothing that shares the backdrop's colour.
 # Segmentation predicts only a mask; it never generates or changes image pixels.
 model=Path('C:/Users/RPizzy2/hermes-media/models/u2net_human_seg.onnx')
 session=ort.InferenceSession(str(model),providers=['CPUExecutionProvider'])
 sample=np.asarray(Image.fromarray(image).resize((320,320),Image.Resampling.LANCZOS)).astype(np.float32)/255.0
 sample=(sample-np.array([.485,.456,.406],dtype=np.float32))/np.array([.229,.224,.225],dtype=np.float32)
 prediction=session.run(None,{session.get_inputs()[0].name:sample.transpose(2,0,1)[None]})[0][0,0]
 prediction=(prediction-prediction.min())/(prediction.max()-prediction.min())
 probability=cv2.resize(prediction,(image.shape[1],image.shape[0]),interpolation=cv2.INTER_LINEAR)
 protected=(probability>.05)
 protected=cv2.dilate(protected.astype(np.uint8),np.ones((3,3),np.uint8))>0
 candidate=((rgb.min(axis=2)>=200)&((rgb.max(axis=2)-rgb.min(axis=2))<=16)&~protected).astype(np.uint8)
 _,labels=cv2.connectedComponents(candidate,connectivity=8)
 border=np.unique(np.concatenate([labels[0,:],labels[:,0],labels[:,-1]]));border=border[border!=0]
 background=np.isin(labels,border)
 # Feather only INSIDE the background. All pixels outside the mask remain exact.
 distance=cv2.distanceTransform(background.astype(np.uint8),cv2.DIST_L2,5)
 alpha=np.clip((distance-.5)/2.0,0,1)[...,None]
 target=np.array([244,242,233],dtype=float)
 blended=np.rint(image.astype(float)*(1-alpha)+target*alpha).astype(np.uint8)
 assert np.array_equal(image[~background],blended[~background])
 dest=ROOT/'public/images/iyan-barry-parchment.webp'
 Image.fromarray(blended).save(dest,lossless=True,method=6)
 decoded=np.array(Image.open(dest));assert np.array_equal(blended,decoded)
 maskpath=ROOT/'scripts/portrait-background-mask.png';Image.fromarray(background.astype(np.uint8)*255).save(maskpath)
 info={'source_sha256':hashlib.sha256(source.read_bytes()).hexdigest(),'output_sha256':hashlib.sha256(dest.read_bytes()).hexdigest(),'size':list(image.shape[:2]),'background_pixels':int(background.sum()),'subject_pixels_unchanged':bool(np.array_equal(image[~background],decoded[~background])),'target_rgb':target.astype(int).tolist(),'method':'U2-Net human protection + border-connected neutral backdrop; 2px inward background-only feather; no subject regeneration'}
 (ROOT/'scripts/portrait-blend-audit.json').write_text(json.dumps(info,indent=2)+'\n')
 print(json.dumps(info,indent=2))
if __name__=='__main__':build()
