import { Container } from "@radix-ui/themes";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <Container className="section-container py-20">
      <h1>What We Can Help You With</h1>
      <div className="flex flex-col lg:flex-row gap-8 mt-10">
        <div className="flex-1">
          <h2>Blocked Drains</h2>
          <p className="text-justify leading-7">
            {" "}
            Blocked drains are one of the most common plumbing issues faced by
            homeowners and businesses. Signs of a blockage can include
            slow-draining sinks, unpleasant odours, gurgling noises, overflowing
            fixtures, and water backing up into your property. If left
            untreated, blocked drains can lead to costly water damage and
            further plumbing complications. Our experienced plumbers use
            professional equipment to accurately identify the cause of the
            blockage and provide effective solutions. Whether the issue is
            caused by grease build-up, foreign objects, tree roots, or damaged
            pipes, we work quickly to restore proper drainage and prevent future
            problems.
          </p>
          <br></br>
          <p className="font-bold">Our blocked drain services include:</p>
          <ul className="list-disc p-5 space-y-2 leading-7">
            <li>Drain inspections</li>
            <li>Tree root removal</li>
            <li>High-pressure water jetting</li>
            <li>Toilet and sink blockage clearing</li>
            <li>Preventative maintenance</li>
          </ul>
        </div>
        <Image
          src="/images/plumber-drain-cleaner-perth-1024x683.webp"
          width="480"
          height="120"
          alt="blocked drains"
          className="h-auto w-full lg:w-[480px] md:h-[400px] mt-7 rounded-2xl shadow-sm object-cover"
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-8 mt-10">
        <div className="flex-1">
          <h2>Burst Pipes</h2>
          <p className="text-justify leading-7 max-w-2xl">
            {" "}
            A burst pipe can cause significant water damage to your property if
            not addressed quickly. Common signs of a burst pipe include sudden
            drops in water pressure, unusually high water bills, damp patches on
            walls or ceilings, water pooling around your property, and the sound
            of running water when no taps are in use. Burst pipes can occur due
            to ageing plumbing, corrosion, ground movement, high water pressure,
            or extreme temperature changes. Our experienced plumbers provide
            fast and reliable burst pipe repairs to minimise damage and restore
            your plumbing system. Using professional leak detection equipment
            and proven repair methods, we quickly locate the source of the
            problem and carry out effective repairs. Whether the burst pipe is
            located inside your home, underground, or within a commercial
            property, we work efficiently to get your plumbing back to normal.
          </p>
          <br></br>
          <p className="font-bold">Our burst pipe services include:</p>
          <ul className="list-disc p-5 space-y-2 leading-7">
            <li>Emergency burst pipe repairs</li>
            <li>Leak detection and diagnosis</li>
            <li>Water pipe replacement</li>
            <li>Underground pipe repairs</li>
            <li>Preventative plumbing maintenance</li>
          </ul>
        </div>
        <Image
          src="/images/pipe_burst_emergency.jpg"
          width="480"
          height="120"
          alt="blocked drains"
          className="h-auto w-full lg:w-[480px] md:h-[400px] mt-7 rounded-2xl shadow-sm object-cover"
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-8 mt-10">
        <div className="flex-1">
          <h2>Hot Water</h2>
          <p className="text-justify leading-7 max-w-2xl">
            {" "}
            A reliable hot water system is essential for the comfort and
            convenience of your home or business. If you're experiencing
            inconsistent water temperatures, a lack of hot water, unusual
            noises, leaks, or rising energy bills, it may be time to repair or
            replace your system. Ignoring these warning signs can lead to
            unexpected breakdowns and costly repairs. Our experienced plumbers
            provide professional hot water system installation, maintenance, and
            repair services to keep your hot water running efficiently all year
            round. We work with a wide range of electric, gas, and continuous
            flow systems, helping you choose the most suitable solution for your
            property's needs and budget. Whether you need an urgent repair or a
            complete system replacement, we deliver reliable workmanship and
            quality service.
          </p>
          <br></br>
          <p className="font-bold">Our hot water services include:</p>
          <ul className="list-disc p-5 space-y-2 leading-7">
            <li>Hot water system repairs</li>
            <li>New system installations</li>
            <li>Hot water system replacements</li>
            <li>Gas and electric hot water services</li>
            <li>Routine maintenance and inspections</li>
          </ul>
        </div>
        <Image
          src="/images/hot_water.jpg"
          width="480"
          height="120"
          alt="hot water"
          className="h-auto w-full lg:w-[480px] md:h-[400px] mt-7 rounded-2xl shadow-sm object-cover"
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-8 mt-10">
        <div className="flex-1">
          <h2>Heat Pupms</h2>
          <p className="text-justify leading-7 max-w-2xl">
            {" "}
            Heat pump hot water systems are an energy-efficient alternative to
            traditional electric water heaters, helping reduce electricity usage
            and lower running costs. They work by extracting heat from the
            surrounding air and using it to heat water, making them an
            environmentally friendly option for many homes and businesses.
            Common signs that your system may need servicing include reduced hot
            water output, unusual noises, longer heating times, or inconsistent
            water temperatures. Our experienced plumbers provide professional
            installation, repair, and maintenance services for heat pump hot
            water systems. We can help you choose the right system for your
            property, ensuring it is correctly sized and installed for maximum
            efficiency and performance. If your existing unit is not performing
            as it should, we quickly diagnose the issue and carry out reliable
            repairs to restore your hot water supply.
          </p>
          <br></br>
          <p className="font-bold">Our heat pump services include:</p>
          <ul className="list-disc p-5 space-y-2 leading-7">
            <li>Heat pump hot water system installation</li>
            <li>System repairs and fault diagnosis</li>
            <li>Full system replacements and upgrades</li>
            <li>Routine servicing and maintenance</li>
            <li>Advice on energy-efficient hot water solutions</li>
          </ul>
        </div>
        <Image
          src="/images/shutterstock_1914071398__1_.webp"
          width="480"
          height="120"
          alt="heat pumps"
          className="h-auto w-full lg:w-[480px] md:h-[400px] mt-7 rounded-2xl shadow-sm object-cover"
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-8 mt-10">
        <div className="flex-1">
          <h2>Toilet Repairs</h2>
          <p className="text-justify leading-7 max-w-2xl">
            {" "}
            A malfunctioning toilet can quickly become inconvenient and
            unhygienic, especially if it is leaking, constantly running,
            blocked, or failing to flush properly. Common toilet issues include
            worn internal components, faulty flush mechanisms, water leaks at
            the base, weak flushing, or frequent blockages caused by build-up or
            foreign objects. Our experienced plumbers provide fast and reliable
            toilet repair services to restore full functionality with minimal
            disruption. We quickly identify the cause of the problem and carry
            out effective repairs using quality parts and professional
            techniques. Whether it's a minor leak, a persistent blockage, or a
            complete flush system failure, we ensure your toilet is working
            efficiently again.
          </p>
          <br></br>
          <p className="font-bold">Our toilet repair services include:</p>
          <ul className="list-disc p-5 space-y-2 leading-7">
            <li>Fixing running or leaking toilets</li>
            <li>Repairing flush mechanisms and buttons</li>
            <li>Clearing toilet blockages</li>
            <li>Sealing leaks at the base of the toilet</li>
            <li>Full toilet replacements if required</li>
          </ul>
        </div>
        <Image
          src="/images/repairing-leaky-toilet-tank-flush-valve.jpg"
          width="480"
          height="120"
          alt="toilet"
          className="h-auto w-full lg:w-[480px] md:h-[400px] mt-7 rounded-2xl shadow-sm object-cover"
        />
      </div>
    </Container>
  );
};

export default page;

export const metadata: Metadata = {
  title: "Services",
  description: "Ranges of services we offer",
};
