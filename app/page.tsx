import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <Image
        src="/images/plumber-fixing-plumbing-system.jpg"
        alt={"background image"}
        fill
        className="bg-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20" />
    </div>
  );
}
