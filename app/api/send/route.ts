import  Email  from '@/app/components/email';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['jrobertswebdev@gmail.com'],
      subject: 'Hello world',
      react: Email(),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}