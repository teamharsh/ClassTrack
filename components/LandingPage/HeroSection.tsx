import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="relative h-[600px]">
      <Image
        src="/landing_image.jpg"
        alt="Classroom"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0"
      />
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 bg-black bg-opacity-50 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Effortless Attendance Management
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Track and manage your class attendance with ease and efficiency.
        </p>
        <Link href="/" passHref>
          <Button size="lg" className="text-lg">
            Get Started
          </Button>
        </Link>
      </div>
    </section>
  );
}
