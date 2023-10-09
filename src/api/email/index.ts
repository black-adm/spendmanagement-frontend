import { NextResponse } from "next/server";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    const { email } = await request.json();

    await resend.sendEmail({
        from: 'spendmanagement@outlook.com',
        to: email,
        subject: 'Estamos a disposição'
        react: //SuportEmail()
    });

    return NextResponse.json({
        status: 'OK'
    })
}