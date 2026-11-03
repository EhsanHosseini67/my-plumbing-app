
import { createElement } from "react";
import WelcomeTemplate from "@/emails/WelcomeTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    // Check API key
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY is missing");

      return NextResponse.json(
        { success: false, error: "Email configuration error" },
        { status: 500 }
      );
    }

    // Parse request
    const { name, email, phone, city, message} =
      await request.json();

    // Initialise Resend
    const resend = new Resend(apiKey);

    // Create email template
    const emailTemplate = createElement(WelcomeTemplate, {
      name,
      email,
      phone,
      city,
      message,
    });

    // Send email
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["ehsanhosseini67@gmail.com"],
      replyTo: "roxanakasbi@gmail.com",
      subject: "New Plumbing Quote Request",
      react: emailTemplate,
    });

    // Handle Resend errors
    if (error) {
      console.error("RESEND ERROR:", error);

      return NextResponse.json(
        { success: false, error: error.message },
        { status: 502 }
      );
    }

    console.log("EMAIL SENT SUCCESSFULLY:", data?.id);

    return NextResponse.json({
      success: true,
      id: data?.id,
    });

  } catch (error) {
    console.error("QUOTE API EXCEPTION:", error);

    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
