import { Container } from "@radix-ui/themes";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <Container className="section-container py-20">
      <h1>What We Can Help You With</h1>
      <div className="flex flex-col lg:flex-row items-center gap-8 mt-10">
        <div className="flex-1">
          <h2>Blocked Drains</h2>
          <p className="text-justify leading-7">
            {" "}
            We are customer friendly, polite, and professional and will go the
            extra mile to ensure complete satisfaction because our reputation
            matters and referrals are a huge part of business. We are customer
            friendly, polite, and professional and will go the extra mile to
            ensure complete satisfaction because our reputation matters and
            referrals are a huge part of business. We are customer friendly,
            polite, and professional and will go the extra mile to ensure
            complete satisfaction because our reputation matters and referrals
            are a huge part of business. We are customer friendly, polite, and
            professional and will go the extra mile to ensure complete
            satisfaction because our reputation matters and referrals are a huge
            part of business.
          </p>
        </div>
        <Image
          src="/images/plumber-drain-cleaner-perth-1024x683.webp"
          width="480"
          height="120"
          alt="blocked drains"
          className="h-auto w-full lg:w-[480px] xl:h-[300px] md:h-[400px] mt-7 rounded-2xl shadow-sm object-cover"
        />
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-8 mt-10">
        <div className="flex-1">
          <h2>Burst Pipes</h2>
          <p className="text-justify leading-7 max-w-2xl">
            {" "}
            We are customer friendly, polite, and professional and will go the
            extra mile to ensure complete satisfaction because our reputation
            matters and referrals are a huge part of business. We are customer
            friendly, polite, and professional and will go the extra mile to
            ensure complete satisfaction because our reputation matters and
            referrals are a huge part of business. We are customer friendly,
            polite, and professional and will go the extra mile to ensure
            complete satisfaction because our reputation matters and referrals
            are a huge part of business. We are customer friendly, polite, and
            professional and will go the extra mile to ensure complete
            satisfaction because our reputation matters and referrals are a huge
            part of business.
          </p>
        </div>
        <Image
          src="/images/pipe_burst_emergency.jpg"
          width="480"
          height="120"
          alt="blocked drains"
          className="h-auto w-full lg:w-[480px] xl:h-[300px] md:h-[400px] mt-7 rounded-2xl shadow-sm object-cover"
        />
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-8 mt-10">
        <div className="flex-1">
          <h2>Hot Water</h2>
          <p className="text-justify leading-7 max-w-2xl">
            {" "}
            We are customer friendly, polite, and professional and will go the
            extra mile to ensure complete satisfaction because our reputation
            matters and referrals are a huge part of business. We are customer
            friendly, polite, and professional and will go the extra mile to
            ensure complete satisfaction because our reputation matters and
            referrals are a huge part of business. We are customer friendly,
            polite, and professional and will go the extra mile to ensure
            complete satisfaction because our reputation matters and referrals
            are a huge part of business. We are customer friendly, polite, and
            professional and will go the extra mile to ensure complete
            satisfaction because our reputation matters and referrals are a huge
            part of business.
          </p>
        </div>
        <Image
          src="/images/hot_water.jpg"
          width="480"
          height="120"
          alt="hot water"
          className="h-auto w-full lg:w-[480px] xl:h-[300px] md:h-[400px] mt-7 rounded-2xl shadow-sm object-cover"
        />
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-8 mt-10">
        <div className="flex-1">
          <h2>Heat Pupms</h2>
          <p className="text-justify leading-7 max-w-2xl">
            {" "}
            We are customer friendly, polite, and professional and will go the
            extra mile to ensure complete satisfaction because our reputation
            matters and referrals are a huge part of business. We are customer
            friendly, polite, and professional and will go the extra mile to
            ensure complete satisfaction because our reputation matters and
            referrals are a huge part of business. We are customer friendly,
            polite, and professional and will go the extra mile to ensure
            complete satisfaction because our reputation matters and referrals
            are a huge part of business. We are customer friendly, polite, and
            professional and will go the extra mile to ensure complete
            satisfaction because our reputation matters and referrals are a huge
            part of business.
          </p>
        </div>
        <Image
          src="/images/shutterstock_1914071398__1_.webp"
          width="480"
          height="120"
          alt="heat pumps"
          className="h-auto w-full lg:w-[480px] xl:h-[300px] md:h-[400px] mt-7 rounded-2xl shadow-sm object-cover"
        />
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-8 mt-10">
        <div className="flex-1">
          <h2>Toilet Repairs</h2>
          <p className="text-justify leading-7 max-w-2xl">
            {" "}
            We are customer friendly, polite, and professional and will go the
            extra mile to ensure complete satisfaction because our reputation
            matters and referrals are a huge part of business. We are customer
            friendly, polite, and professional and will go the extra mile to
            ensure complete satisfaction because our reputation matters and
            referrals are a huge part of business. We are customer friendly,
            polite, and professional and will go the extra mile to ensure
            complete satisfaction because our reputation matters and referrals
            are a huge part of business. We are customer friendly, polite, and
            professional and will go the extra mile to ensure complete
            satisfaction because our reputation matters and referrals are a huge
            part of business.
          </p>
        </div>
        <Image
          src="/images/repairing-leaky-toilet-tank-flush-valve.jpg"
          width="480"
          height="120"
          alt="toilet"
          className="h-auto w-full lg:w-[480px] xl:h-[300px] md:h-[400px] mt-7 rounded-2xl shadow-sm object-cover"
        />
      </div>
    </Container>
  );
};

export default page;
