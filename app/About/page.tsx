import React from "react";
import Image from "next/image";
import { Container } from "@radix-ui/themes";

const AboutUs = () => {
  return (
    <Container className="section-container py-20">
      {/* WHO WE ARE */}
      <div className="mb-20">
        <h1>
          Who We Are?
        </h1>

        <p className="mb-5">
          We are a proudly owned and run Australian family business. By that, we
          mean that we are not a corporation that only watches profits to keep
          shareholders happy. We are a team of committed professional
          experienced plumbers who not only enjoy what we do but are part of
          your community.
          We are a proudly owned and run Australian family business. By that, we
          mean that we are not a corporation that only watches profits to keep
          shareholders happy. We are a team of committed professional
          experienced plumbers who not only enjoy what we do but are part of
          your community.
        </p>

        <Image
          src="/images/a-male-plumber-s-hand-repairing-a-leaking-sink-pipe-with-an-adjustable-wrench-free-photo.jpg"
          alt="who we are"
          width={920}
          height={600}
          className="w-full h-auto rounded-3xl object-cover"
        />
      </div>

      {/* WHY CHOOSE US */}
      <div className="mb-20">
        <h1>
          Why Choosing Us?
        </h1>

        <p className="mb-5">
          We are customer friendly, polite, and professional and will go the
          extra mile to ensure complete satisfaction because our reputation
          matters and referrals are a huge part of business.
          We are customer friendly, polite, and professional and will go the
          extra mile to ensure complete satisfaction because our reputation
          matters and referrals are a huge part of business.
        </p>

        <Image
          src="/images/plumbing-1920-x-1081-picture-rjnxszdlvn9w5h19.jpg"
          alt="why choose us"
          width={920}
          height={600}
          className="w-full h-auto rounded-3xl object-cover"
        />
      </div>

      {/* REVIEWS */}
      <div className="mb-10">
        <h1>
          What Our Customers Say?
        </h1>

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
