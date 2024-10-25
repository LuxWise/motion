"use client";

import Image from "next/image";
import logo from "@/assets/Imagologo_motion.svg";
import phone from "@/assets/Telefono-01.png";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const navigateToTable = () => {
    router.push("/table");
  };

  return (
    <main className="w-screen h-screen" onClick={navigateToTable}>
      <header className="flex w-full h-20 p-6">
        <Image src={logo} alt="Logo" className="w-10 h-10" />
      </header>

      <section className="flex flex-col items-center justify-center w-full h-[73%]">
        <h1 className="text-8xl font-bold text-[#00249C] select-none">
          BIENVENIDO A
        </h1>
        <Image
          src={phone}
          alt="Phone illustration"
          className="absolute z-10 object-contain w-[29%] "
        />
        <p className="text-7xl font-bold text-[#00249C] z-20 select-none">
          MONITORING INNOVATION
        </p>
      </section>

      <footer className="flex items-center justify-center w-full h-20">
        <div className="grid grid-cols-4 gap-x-8 text-center text-[#01BEDB] text-md select-none">
          <h2>MONITORING INNOVATION</h2>
          <h2>GPS CONTROL</h2>
          <a
            href="https://link-to-repo-front"
            target="_blank"
            rel="noopener noreferrer"
          >
            Frontend Repo
          </a>
          <a
            href="https://link-to-repo-back"
            target="_blank"
            rel="noopener noreferrer"
          >
            Backend Repo
          </a>
        </div>
      </footer>
    </main>
  );
}
