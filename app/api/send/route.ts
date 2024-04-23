import  Email  from '@/app/email/email';
import EmailTemplate from '@/app/email/email-temp';
import ReactEmail from '@/app/email/react-email';
import { mockData } from '@/app/data/mock';
import { Data } from '@/app/types/exp';
import { Resend } from 'resend';
import React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request:Request) {
  const userData = await request.json();
  // const userData:Data = mockData;
  console.log('UData',userData)
  try {
    const {data, error} = await resend.emails.send({
      from: 'Job Application <jordan@jrobertsweb.dev>',
      to: ['inkmonkeyllc@gmail.com'],
      subject: 'New Applicant',
      react: ReactEmail({ data: userData }) as React.ReactElement,
    });
    if (error) {
      return Response.json({ error });
    }
    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}