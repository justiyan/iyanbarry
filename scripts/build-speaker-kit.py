"""Build the two-page speaker kit and copyable bios from shared website content.

Requirements: python -m pip install reportlab pymupdf pillow
Run: python scripts/build-speaker-kit.py [--portrait PATH] [--render-dir PATH]
Only pass --portrait with the user's approved real photograph. No generated likeness.
The original is copied byte-for-byte; the square is an ordinary photographic crop.
"""
import argparse
import json
import shutil
from pathlib import Path
from xml.sax.saxutils import escape

import fitz
from PIL import Image, ImageOps
from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfgen import canvas
from reportlab.platypus import Paragraph

ROOT = Path(__file__).resolve().parents[1]
DEFAULT_PHOTO = Path('C:/Users/RPizzy2/AppData/Local/hermes/cache/images/img_d2f7a2c80e36.jpg')
INK, MUTED, BLUE, LINE = (HexColor(x) for x in ['#0b0d0f', '#3d444d', '#1f5fd0', '#e4e8ec'])
W, H = A4
LEFT, RIGHT = 46, W - 46


def build(portrait=None, render_dir=None):
    data_path = ROOT / 'lib/speaker-kit.json'
    data = json.loads(data_path.read_text(encoding='utf-8'))
    out = ROOT / 'public/downloads'
    out.mkdir(parents=True, exist_ok=True)
    photo = Path(portrait) if portrait else DEFAULT_PHOTO
    square = None
    if portrait and not photo.is_file():
        raise FileNotFoundError(f'Approved portrait not found: {photo}')
    # Original approval and crop provenance: session 20260901_223632_0f1b58dd,
    # messages 96687 and 96694. The website image is a crop of that approved photo.
    website_crop = not photo.is_file()
    if website_crop:
        photo = ROOT / 'public/images/iyan-barry-cio.jpg'
        print('NOTE: uncropped original missing; preserving the approved website crop, labelled as such.')
    if photo.is_file():
        original = out / ('iyan-barry-portrait.jpg' if website_crop else 'iyan-barry-portrait-original.jpg')
        square = out / 'iyan-barry-portrait-square.jpg'
        with Image.open(photo) as source:
            if source.format != 'JPEG':
                raise ValueError('Approved portrait must be a JPEG for the published JPG download.')
            image = ImageOps.exif_transpose(source).convert('RGB')
            # Straight crop only: retain hair/headroom, collar and shoulders.
            size = round(min(image.size) * 0.80)
            x = round((image.width - size) * 0.70)
            y = round((image.height - size) * 0.15)
            image.crop((x, y, x + size, y + size)).save(square, quality=95, subsampling=0)
        shutil.copyfile(photo, original)
        for label, name, detail in [
            ('Portrait', original.name, 'JPG · approved photo, website crop' if website_crop else 'JPG · original photograph'),
            ('Square headshot', square.name, 'JPG · tighter square crop'),
        ]:
            href = '/downloads/' + name
            if not any(a['href'] == href for a in data['downloads']):
                data['downloads'].append({'label': label, 'detail': detail, 'href': href})
        data_path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    else:
        raise FileNotFoundError('Neither approved original nor its existing website crop is available.')

    bio_text = data['name'] + ' | Speaker bios\n' + data['website'] + '\n\n'
    bio_text += '\n\n'.join(b['len'].upper() + '\n' + b['text'] for b in data['bios'])
    bio_text += '\n\nSpeaking enquiries: ' + data['contact'] + '\n'
    (out / 'iyan-barry-bios.txt').write_text(bio_text, encoding='utf-8')
    pdf_path = out / 'iyan-barry-speaker-kit.pdf'
    c = canvas.Canvas(str(pdf_path), pagesize=A4, pageCompression=1)
    c.setTitle('Iyan Barry | Speaker kit')
    c.setAuthor(data['name'])
    c.setSubject('Speaking topics, audience takeaways, formats and approved biographies')

    def text(value, x, top, width, size: float = 10, leading: float = 14, color=MUTED, bold=False):
        style = ParagraphStyle('text', fontName='Helvetica-Bold' if bold else 'Helvetica',
                               fontSize=size, leading=leading, textColor=color)
        p = Paragraph(escape(value), style)
        _, height = p.wrap(width, H)
        if top + height > H - 54:
            raise ValueError(f'Content exceeds page: {value[:60]}')
        p.drawOn(c, x, H - top - height)
        return top + height

    def footer(page):
        c.setStrokeColor(LINE)
        c.line(LEFT, 43, RIGHT, 43)
        c.setFont('Helvetica', 8)
        c.setFillColor(MUTED)
        c.drawString(LEFT, 29, 'IYAN BARRY  /  SPEAKER KIT')
        c.setFillColor(BLUE)
        c.drawString(265, 29, 'iyanbarry.com/contact')
        c.linkURL(data['contact'], (263, 25, 390, 40), relative=0)
        c.setFillColor(MUTED)
        c.drawRightString(RIGHT, 29, f'{page} / 2')

    text('SPEAKING & MEDIA', LEFT, 37, 350, 9, 12, BLUE, True)
    text(data['name'], LEFT, 61, 355, 34, 39, INK, True)
    text(data['role'], LEFT, 108, 360, 11, 15, INK)
    text(data['location'], LEFT, 128, 360, 9, 12)
    intro_width = RIGHT - LEFT
    if square:
        c.drawImage(str(square), RIGHT - 94, H - 141, width=94, height=94, mask='auto')
    y = text(data['intro'], LEFT, 161, intro_width, 10.5, 15) + 21
    text('01  /  TOPICS & AUDIENCE TAKEAWAYS', LEFT, y, RIGHT - LEFT, 9, 12, BLUE, True)
    y += 28
    for index, topic in enumerate(data['topics'], 1):
        text(f'{index:02}', LEFT, y + 1, 25, 9, 12, BLUE)
        x, width = LEFT + 34, RIGHT - LEFT - 34
        y = text(topic['title'], x, y, width, 12, 15, INK, True) + 3
        y = text(topic['audience'], x, y, width, 8, 11, BLUE) + 4
        y = text(topic['takeaway'], x, y, width, 10, 13) + 12
        c.setStrokeColor(LINE)
        c.line(x, H - y + 4, RIGHT, H - y + 4)
    footer(1)
    c.showPage()
    text('02  /  FOR EVENT ORGANISERS', LEFT, 39, RIGHT - LEFT, 9, 12, BLUE, True)
    text('Bios & booking', LEFT, 64, RIGHT - LEFT, 28, 34, INK, True)
    y = 119
    for bio in data['bios']:
        y = text(bio['len'].upper(), LEFT, y, RIGHT - LEFT, 8, 11, BLUE, True) + 6
        y = text(bio['text'], LEFT, y, RIGHT - LEFT, 10, 14) + 19
    y += 2
    text('FORMATS', LEFT, y, 190, 8, 11, BLUE, True)
    text('PLANNING AN EVENT?', 315, y, RIGHT - 315, 8, 11, BLUE, True)
    y += 23
    for line in data['formats']:
        text(line, LEFT, y, 242, 9, 13)
        y += 21
    booking_top = y - 105
    text('Tell me the audience, the date and what you want them to walk away with. I will tell you honestly whether I am the right speaker for it.', 315, booking_top, RIGHT - 315, 10, 14)
    link_y = booking_top + 87
    text('iyanbarry.com/contact', 315, link_y, RIGHT - 315, 10, 14, BLUE, True)
    c.linkURL(data['contact'], (315, H - link_y - 16, RIGHT, H - link_y + 2), relative=0)
    footer(2)
    c.save()
    with fitz.open(pdf_path) as pdf:
        assert len(pdf) == 2
        if render_dir:
            render_path = Path(render_dir)
            render_path.mkdir(parents=True, exist_ok=True)
            for i, page in enumerate(pdf):
                page.get_pixmap(matrix=fitz.Matrix(1.6, 1.6)).save(render_path / f'speaker-kit-page-{i + 1}.png')
        print(json.dumps({'pdf': str(pdf_path), 'pages': len(pdf), 'bios': str(out / 'iyan-barry-bios.txt'), 'portrait_created': bool(square), 'bytes': pdf_path.stat().st_size}))


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--portrait', help='Approved real JPEG; default uses the original or its documented website crop')
    parser.add_argument('--render-dir', help='Optional directory for visual QA PNGs')
    args = parser.parse_args()
    build(args.portrait, args.render_dir)
