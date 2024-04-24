import React from 'react'
import ReactEmail from '@/app/email/react-email'
import { Readable } from 'stream'
import { renderToStream } from '@react-pdf/renderer'
import { MyDocument } from '@/app/pdf/pdf'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

async function streamToBuffer(stream: NodeJS.ReadableStream): Promise<Buffer> {
 const chunks: Buffer[] = []
 for await (const chunk of stream) {
  chunks.push(Buffer.from(chunk))
 }
 return Buffer.concat(chunks)
}
const currentDate = new Date().toDateString()
export async function POST(request: Request) {
 const userData = await request.json()
 const stream = await renderToStream(MyDocument({ data: userData }))
 const buffer = await streamToBuffer(stream)
 try {
  const { data, error } = await resend.emails.send({
   from: 'Job Application <jordan@jrobertsweb.dev>',
   to: ['inkmonkeyllc@gmail.com'],
   subject: 'New Applicant',
   react: ReactEmail({ data: userData }) as React.ReactElement,
   attachments: [
    {
     filename: `${userData.contact.firstName}_${userData.contact.lastName}_application_${currentDate}.pdf`,
     content: buffer,
    },
   ],
  })
  if (error) {
   return Response.json({ error })
  }
  return Response.json(data)
 } catch (error) {
  return Response.json({ error })
 }
}
