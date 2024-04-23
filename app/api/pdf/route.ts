import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import PdfPrinter from 'pdfmake'
import { Data } from '@/app/types/exp'

const fonts = {
 Roboto: {
  normal: 'app/fonts/Roboto/Roboto-Regular.ttf',
  bold: 'app/fonts/Roboto/Roboto-Medium.ttf',
 },
}

export async function POST(request: NextRequest) {
 const data: Data = await request.json()
 console.log(data)
 try {
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
  console.log(docDefinition)
  //   const pdfDoc = printer.createPdfKitDocument(docDefinition)
  //   let chunks: Uint8Array[] = []
  //   pdfDoc.on('data', (chunk) => chunks.push(chunk))
  //   pdfDoc.on('end', () => {
  //    const result = Buffer.concat(chunks)
  //    console.log(result)
  //    Response.json({ message: 'Email sent successfully.' })
  //   })
  //   pdfDoc.end()
  Response.json({ message: 'Email sent successfully.' })
 } catch (err) {
  console.log(err)
  Response.json({ message: 'Error sending email.' })
 }
}
