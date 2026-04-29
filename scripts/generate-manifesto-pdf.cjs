const fs = require('fs')
const path = require('path')
const PDFDocument = require('pdfkit')

const outputPath = path.join(__dirname, '..', 'public', 'The_Plier_Manifesto_Official.pdf')
fs.mkdirSync(path.dirname(outputPath), { recursive: true })

const doc = new PDFDocument({ margin: 50 })
doc.pipe(fs.createWriteStream(outputPath))

doc.fontSize(24).fillColor('#b11f24').text('The Plier Manifesto', { align: 'center' })
doc.moveDown(0.3)
doc.fontSize(14).fillColor('#333').text('A New Culinary Taxonomy', { align: 'center' })
doc.moveDown()
doc.fontSize(11).fillColor('#111').text('Founder: The User')
doc.text('Date: April 2026')
doc.moveDown()

doc.fontSize(13).fillColor('#b11f24').text('I. The Crisis of Classification')
doc.moveDown(0.2)
doc.fontSize(11).fillColor('#111').text('The hot dog is neither a stacked sandwich nor an unleavened taco fold. The Plier Method classifies food by structure and hand mechanics.')
doc.moveDown()

doc.fontSize(13).fillColor('#b11f24').text('II. The Three Pillars')
doc.moveDown(0.2)
doc.fontSize(11).fillColor('#111').list([
  'Leavened starch (aerated bread).',
  'Unified hinge (single bread body).',
  'The pinch (vertical squeeze for integrity).',
])
doc.moveDown()

doc.fontSize(13).fillColor('#b11f24').text('III. Hall of Fame')
doc.moveDown(0.2)
doc.fontSize(11).fillColor('#111').list([
  'The King: American Hot Dog',
  'The Ancient Ancestor: Gyro',
  'The Coastal Variant: Lobster Roll',
  'The Eastern Variant: Gua Bao',
])
doc.moveDown()

doc.fontSize(10).fillColor('#666').text('Developed in collaboration with Gemini (Google).', { align: 'center' })
doc.end()
