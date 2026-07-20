import { Container } from "@radix-ui/themes";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] w-full">
        <Image
          src="/images/mybackground.jpg"
          alt={"background image"}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20" />
      </div>
      <Container className="my-10 px-4 md:px-6">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-5">
          Welcome to Sydney plumbing
        </h1>
        <p className="leading-8 text-gray-700 text-justify">
          Welcome to Sydney Plumbing, your trusted local plumbing experts
          providing fast, reliable, and affordable plumbing services across
          Sydney. We specialise in delivering high-quality plumbing solutions
          for both residential and commercial properties, helping homeowners,
          landlords, and businesses keep their plumbing systems running smoothly
          all year round. Whether you are facing an urgent plumbing emergency or
          planning routine maintenance, our licensed and experienced plumbers
          are ready to help. We understand that plumbing issues can be stressful
          and disruptive, which is why we focus on prompt response times, clear
          communication, and effective long-term solutions that you can rely on.
          Our team handles a full range of plumbing services, including blocked
          drains, burst pipes, hot water system repairs and installations, heat
          pump hot water systems, toilet repairs, leak detection, and general
          plumbing maintenance. No matter the size or complexity of the job, we
          approach every project with professionalism, attention to detail, and
          a commitment to getting it right the first time. At Sydney Plumbing,
          we combine modern tools and proven industry techniques to quickly
          diagnose issues and provide efficient repairs. We pride ourselves on
          honest, upfront pricing with no hidden surprises, so you always know
          what to expect before work begins. Based in Sydney, we are dedicated
          to providing dependable plumbing services tailored to the needs of our
          local community. Our goal is not just to fix plumbing problems, but to
          deliver peace of mind through quality workmanship and trustworthy
          service. If you are looking for a reliable plumber in Sydney, Sydney
          Plumbing is here to help with fast service, expert solutions, and
          customer-focused care you can depend on.
        </p>
        <div className="card w-full bg-cyan-100 shadow-md my-10 rounded-3xl">
          <div className="card-body">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-5 text-center">
              Expert Plumbing Services
            </h1>
            <p className=" text-gray-700 text-center text-base md:text-lg p-4 md:p-6 leading-8 text-justify">
              At Sydney Plumbing, we provide expert plumbing services designed
              to solve problems quickly, efficiently, and with long-lasting
              results. Our experienced team of licensed plumbers delivers
              high-quality workmanship across all aspects of residential and
              commercial plumbing, ensuring your property remains safe,
              functional, and free from disruptive plumbing issues. We
              understand that plumbing problems can happen at any time, which is
              why we offer responsive and dependable service for urgent repairs
              and ongoing maintenance. From blocked drains and burst pipes to
              hot water system failures, heat pump installations, toilet
              repairs, and leak detection, we have the skills and equipment to
              handle it all. Using advanced diagnostic tools and proven repair
              techniques, we accurately identify the root cause of plumbing
              issues rather than just treating the symptoms. This allows us to
              provide effective, long-term solutions that help prevent recurring
              problems and unnecessary costs. Our team is committed to
              delivering honest advice, upfront pricing, and professional
              service on every job. Whether it is a small household repair or a
              large-scale commercial plumbing project, we approach every task
              with the same level of care, attention to detail, and commitment
              to quality. Proudly servicing Sydney and surrounding suburbs, we
              are dedicated to being the local plumbers you can trust for fast
              response times, reliable service, and expert plumbing solutions
              tailored to your needs.
            </p>
          </div>
        </div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-5">
          How we guarantee a hassle-free experience
        </h1>
        <p className="leading-8 text-gray-700 text-justify">
          At Sydney Plumbing, we are committed to making every plumbing job as
          smooth and hassle-free as possible for our customers. We understand
          that plumbing issues can be disruptive and stressful, which is why we
          have designed our process to be simple, transparent, and efficient
          from the moment you contact us through to job completion. It starts
          with clear communication and fast response times. When you reach out,
          our friendly team listens to your issue, provides practical advice,
          and arranges a convenient time for service. We always aim to arrive on
          time and fully prepared, so there are no unnecessary delays or
          surprises. Before any work begins, we provide clear, upfront pricing
          so you know exactly what to expect. There are no hidden costs or
          confusing fees—just honest, transparent quotes that give you
          confidence and control over your decision. Our licensed plumbers use
          modern tools and proven techniques to diagnose and resolve plumbing
          issues efficiently. Whether it is a blocked drain, burst pipe, hot
          water system fault, or general plumbing repair, we focus on delivering
          long-lasting solutions that prevent repeat problems. We also respect
          your home or business by keeping work areas clean and tidy, and
          completing every job with care and attention to detail. Our goal is
          not just to fix the issue, but to provide a smooth, stress-free
          experience that gives you complete peace of mind. From start to
          finish, Sydney Plumbing is committed to reliable service, professional
          workmanship, and a customer-first approach that makes plumbing simple
          and hassle-free.
        </p>
        <div
          className="relative h-[400px] md:h-[500px] lg:h-[600px] bg-scroll lg:bg-fixed bg-center bg-cover rounded-3xl overflow-hidden my-10"
          style={{
            backgroundImage:
              "url('/images/1000_F_783550299_nSOwzmYewJJQJxz0aB7Fmyju0H6PUael.jpg')",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content */}
          <div className="relative z-10 flex h-full items-center justify-center">
            <div className="text-center text-white px-4">
              <p className="text-3xl md:text-4 font-bold mb-4">
                Need a Plumbing Expert in Sydney?
              </p>
              <p className="text-center justify-center mb-5 px-4 md:px-10 lg:px-20 text-base md:text-xl leading-8 md:leading-10">
                Call Sydney plumbing team to speak to one of our friendly
                technicians, get a free quote and get your plumbing project
                booked in.
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-5">
                <Link
                  href="/Quote"
                  className="btn  bg-emerald-600 text-white hover:bg-white hover:text-emerald-600 text-lg md:text-2xl px-6 py-4 md:px-8 md:py-6 font-bold rounded-full"
                >
                  Get A Quote
                </Link>
                <Link
                  href="/FAQ#Contact"
                  className="btn  bg-emerald-600 text-white hover:bg-white hover:text-emerald-600 text-lg md:text-2xl px-6 py-4 md:px-8 md:py-6 font-bold rounded-full"
                >
                  0477123456
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export const metadata: Metadata = {
  title: "Sydney Plumbing",
  description: "Trusted plumbing service in Sydney",
};
