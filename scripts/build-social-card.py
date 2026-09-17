"""Rebuild the social card from the unchanged approved portrait."""
from pathlib import Path
from PIL import Image,ImageDraw,ImageFont,ImageOps
ROOT=Path(__file__).resolve().parents[1]
def build():
 im=Image.new('RGB',(1200,630),'#f4f2e9');d=ImageDraw.Draw(im)
 serif=lambda n:ImageFont.truetype('C:/Windows/Fonts/georgia.ttf',n)
 sans=lambda n:ImageFont.truetype('C:/Windows/Fonts/arial.ttf',n)
 d.text((60,48),'Iyan Barry.',font=serif(42),fill='#203b39')
 d.text((60,140),'CIO  /  ADVISOR  /  BUILDER',font=sans(18),fill='#24645c')
 for y,line in [(197,'Technology leadership,'),(272,'with the ability'),(347,'to build.')]:
  d.text((60,y),line,font=serif(48),fill='#24645c' if line=='to build.' else '#203b39')
 d.line((60,484,660,484),fill='#cdd4c7',width=2)
 d.text((60,516),'iyanbarry.com',font=sans(23),fill='#24645c')
 photo=ImageOps.fit(Image.open(ROOT/'public/images/iyan-barry-cio.jpg').convert('RGB'),(380,478),centering=(.5,.28))
 mask=Image.new('L',photo.size,0);m=ImageDraw.Draw(mask);m.rounded_rectangle((0,0,379,477),radius=150,fill=255);m.rectangle((0,150,379,477),fill=255)
 im.paste(photo,(760,76),mask);im.save(ROOT/'public/images/iyan-barry-og.jpg',quality=95,subsampling=0)
 print('Social sharing card:1200x630, approved portrait unchanged except crop/size')
if __name__=='__main__':build()
