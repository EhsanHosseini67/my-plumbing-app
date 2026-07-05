import WelcomeTemplate from "@/emails/WelcomeTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, phone, city, message } = body;

  try {
    await resend.emails.send({
      from: "Domain",
      to: "xxxxxxx@gmail.com",
      subject: "quote",
      react: (
        <WelcomeTemplate
          name={name}
          email={email}
          phone={phone}
          city={city}
          message={message}
        />
      ),
    });
    return NextResponse.json({success: true});
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
