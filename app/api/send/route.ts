import ReactEmail from '@/app/email/react-email';
import { Resend } from 'resend';
import React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request:Request) {
  const userData = await request.json();

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