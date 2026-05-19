import { Box, Container } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] w-full">
        <Image
          src="/images/plumber-fixing-plumbing-system.jpg"
          alt={"background image"}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20" />
      </div>
      <Container className="my-10 px-4 md:px-6">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-5">Welcome to Sydney plumbers</h1>
        <p className="leading-8 text-gray-700">
          We are a proudly owned and run Australian family business. By that, we
          mean that we are not a corporation that only watches profits to keep
          shareholders happy. We are a team of committed professional
          experienced plumbers who not only enjoy what we do but are part of
          your community.We are a proudly owned and run Australian family
          business. By that, we mean that we are not a corporation that only
          watches profits to keep shareholders happy. We are a team of committed
          professional experienced plumbers who not only enjoy what we do but
          are part of your community.We are a proudly owned and run Australian
          family business. By that, we mean that we are not a corporation that
          only watches profits to keep shareholders happy. We are a team of
          committed professional experienced plumbers who not only enjoy what we
          do but are part of your community.We are a proudly owned and run
          Australian family business. By that, we mean that we are not a
          corporation that only watches profits to keep shareholders happy. We
          are a team of committed professional experienced plumbers who not only
          enjoy what we do but are part of your community.
        </p>
        <p className="leading-8 text-gray-700 mt-5">
          We are a proudly owned and run Australian family business. By that, we
          mean that we are not a corporation that only watches profits to keep
          shareholders happy. We are a team of committed professional
          experienced plumbers who not only enjoy what we do but are part of
          your community.We are a proudly owned and run Australian family
          business. By that, we mean that we are not a corporation that only
          watches profits to keep shareholders happy. We are a team of committed
          professional experienced plumbers who not only enjoy what we do but
          are part of your community.We are a proudly owned and run Australian
          family business. By that, we mean that we are not a corporation that
          only watches profits to keep shareholders happy. We are a team of
          committed professional experienced plumbers who not only enjoy what we
          do but are part of your community.We are a proudly owned and run
          Australian family business. By that, we mean that we are not a
          corporation that only watches profits to keep shareholders happy. We
          are a team of committed professional experienced plumbers who not only
          enjoy what we do but are part of your community.
        </p>
        <div className="card w-full bg-cyan-100 shadow-md my-10 rounded-3xl">
          <div className="card-body">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-5 text-center">
              Expert Plumbing Services
            </h1>
            <p className=" text-gray-700 text-center text-base md:text-lg p-4 md:p-6 leading-8">
              CDL Plumbing & Drainage are a proud family-owned business with
              over 15 years of expert experience in the Lake Macquarie and
              Newcastle areas. We have 2 teams and fully equipped trucks ready
              to handle all plumbing jobs, large or small and are fully
              licensed, qualified and insured. During this time, we have been
              building a great reputation for exceptional customer service and
              high standards of work, whilst maintaining affordability. Service
              is hugely important to us, and we have learned what our customers
              require from us – punctuality, reliability, affordability and a
              friendly manner.
            </p>
            <p className=" text-gray-700 text-center text-base md:text-lg p-4 md:p-6 leading-8">
              We always answer all questions in an understandable way as
              communication is paramount and provide free quotes with no
              obligation. On top of that, we make sure that we leave all jobs
              clean and tidy as our reputation depends on it. CDL regularly take
              on a wide variety of jobs as our service list is very extensive.
              If you require any general plumbing, gas fitting or drainage work
              for your home or business, call us to get the job done right,
              first time, on time and within budget.
            </p>
          </div>
        </div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-5">
          How we guarantee a hassle-free experience
        </h1>
        <p className="leading-8 text-gray-700">
          We are a proudly owned and run Australian family business. By that, we
          mean that we are not a corporation that only watches profits to keep
          shareholders happy. We are a team of committed professional
          experienced plumbers who not only enjoy what we do but are part of
          your community.We are a proudly owned and run Australian family
          business. By that, we mean that we are not a corporation that only
          watches profits to keep shareholders happy. We are a team of committed
          professional experienced plumbers who not only enjoy what we do but
          are part of your community.We are a proudly owned and run Australian
          family business. By that, we mean that we are not a corporation that
          only watches profits to keep shareholders happy. We are a team of
          committed professional experienced plumbers who not only enjoy what we
          do but are part of your community.We are a proudly owned and run
          Australian family business. By that, we mean that we are not a
          corporation that only watches profits to keep shareholders happy. We
          are a team of committed professional experienced plumbers who not only
          enjoy what we do but are part of your community.
        </p>
        <div
          className="relative h-[400px] md:h-[500px] lg:h-[600px] bg-fixed bg-center bg-cover rounded-3xl overflow-hidden my-10"
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
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                Need a Plumbing Expert in Sydney?
              </h2>
              <p className="text-center justify-center mb-5 px-4 md:px-10 lg:px-20 text-base md:text-xl leading-8 md:leading-10">
                Call CDL Plumbing & Drainage to speak to one of our friendly
                technicians, get a free quote and get your plumbing project
                booked in.
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-5">
                <Link
                  href="/"
                  className="btn btn-secondary text-lg md:text-2xl px-6 py-4 md:px-8 md:py-6 font-bold rounded-full"
                >
                  Get A Quote
                </Link>
                <Link
                  href="/"
                  className="btn btn-secondary text-lg md:text-2xl px-6 py-4 md:px-8 md:py-6 font-bold rounded-full"
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
