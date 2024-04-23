'use server'

import fs from 'fs'
import PdfPrinter from 'pdfmake'
import { Data } from '@/app/types/exp'

const fonts = {
 Roboto: {
  normal: 'node_modules/roboto-font/fonts/Roboto/roboto-regular-webfont.ttf',
  bold: 'node_modules/roboto-font/fonts/Roboto/roboto-bold-webfont.ttf',
 },
}

export async function makeFile(data: Data) {
 console.log(data)
 const printer = new PdfPrinter(fonts)
 const docDefinition = {
  content: [
   { text: 'Job Application Form', style: 'header' },
   // Dynamically add your form fields here
   `Name: ${data.contact.firstName} ${data.contact.lastName}`,
   `Email: ${data.contact.email}`,
   // More fields...
  ],
  styles: {
   header: { fontSize: 18, bold: true },
  },
 }
 var pdfDoc = printer.createPdfKitDocument(docDefinition)
 pdfDoc.pipe(fs.createWriteStream('../document.pdf'))
 pdfDoc.end()
 return { Success: 'Document created successfully!' }
}
