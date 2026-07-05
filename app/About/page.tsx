import React from "react";
import Image from "next/image";
import { Container } from "@radix-ui/themes";
import { Metadata } from "next";

const AboutUs = () => {
  return (
    <Container className="section-container py-20">
      {/* WHO WE ARE */}
      <div className="mb-20">
        <h1>Who We Are?</h1>

        <p className="mb-5 text-justify leading-7">
          We are a professional plumbing company providing reliable and
          affordable plumbing services for homes and businesses. With a strong
          focus on quality workmanship, fast response times, and honest pricing,
          we have built a reputation for delivering dependable plumbing
          solutions when our customers need them most. Our team of licensed and
          experienced plumbers is committed to handling everything from small
          repairs to complex plumbing issues. We understand how disruptive
          plumbing problems can be, which is why we prioritise clear
          communication, efficient service, and long-lasting results. Whether
          it's a blocked drain, burst pipe, hot water system issue, or general
          plumbing maintenance, we approach every job with the same level of
          care and attention to detail. We proudly serve local homeowners and
          businesses, offering practical solutions tailored to each property's
          needs. Our goal is not just to fix plumbing issues, but to provide
          peace of mind through trustworthy service and reliable support.
        </p>

        <Image
          src="/images/a-male-plumber-s-hand-repairing-a-leaking-sink-pipe-with-an-adjustable-wrench-free-photo.jpg"
          alt="who are Sydney plumbers"
          width={920}
          height={600}
          className="w-full h-auto rounded-2xl shadow-sm object-cover"
        />
      </div>

      {/* WHY CHOOSE US */}
      <div className="mb-20">
        <h1>Why Choosing Us?</h1>

        <p className="mb-5 text-justify leading-7">
          Choosing the right plumber is important when you want fast, reliable,
          and long-lasting solutions. We are committed to providing high-quality
          plumbing services with a strong focus on customer satisfaction,
          honesty, and professionalism. Our goal is to make every job as
          stress-free as possible, from the first call through to completion. We
          understand that plumbing issues can be urgent and disruptive, which is
          why we prioritise prompt response times and efficient service. Our
          licensed plumbers use modern tools and proven techniques to diagnose
          and fix problems correctly the first time. Whether it's a blocked
          drain, burst pipe, hot water issue, or general plumbing maintenance,
          we deliver practical solutions tailored to your needs. We also believe
          in transparent communication and fair pricing, so you always know what
          to expect before work begins. No hidden surprises—just reliable
          service you can trust.
        </p>

        <Image
          src="/images/plumbing-1920-x-1081-picture-rjnxszdlvn9w5h19.jpg"
          alt="why choose Sydney plumbers"
          width={920}
          height={600}
          className="w-full h-auto rounded-2xl shadow-sm object-cover"
        />
      </div>

      {/* REVIEWS */}
      <div className="mb-10">
        <h1>What Our Customers Say?</h1>

        <div className="flex items-center gap-2 p-4 border rounded-xl w-fit shadow-sm">
          <span className="text-yellow-500 text-lg">★★★★★</span>
          <span className="font-semibold">4.8</span>
          <span className="text-gray-500 text-sm">(120 reviews)</span>
        </div>
      </div>
    </Container>
  );
};

export default AboutUs;

export const metadata: Metadata = {
  title: "About",
  description: "Know more about Sydney plumbing",
};
