"use client";

import Image from "next/image";
import logo from "@/assets/Imagologo_motion.svg";
import phone from "@/assets/Telefono-01.png";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Wave } from "@/Layout/wave";

const Home = () => {
  const router = useRouter();

  const navigateToTable = () => {
    router.push("/table");
  };

  return (
    <Wave>
      <motion.main
        className="w-screen h-screen"
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <header className="flex w-full h-20 p-6">
          <Image src={logo} alt="Logo" className="w-10 h-10" />
        </header>

        <section
          className="flex flex-col items-center justify-center w-full h-[73%]"
          onClick={navigateToTable}
        >
          <h1 className="text-8xl font-bold text-[#00249C] select-none">
            BIENVENIDO A
          </h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="absolute z-10 w-[28%]"
          >
            <Image
              src={phone}
              alt="Phone illustration"
              className="object-contain"
            />
          </motion.div>

          <p className="text-7xl font-bold text-[#00249C] z-20 select-none textStrokeWhite">
            MONITORING INNOVATION
          </p>
        </section>

        <footer className="flex items-center justify-center w-full h-20">
          <div className="grid grid-cols-4 gap-x-8 text-center text-[#01BEDB] text-md select-none">
            <h2>MONITORING INNOVATION</h2>
            <h2>GPS CONTROL</h2>
            <a
              href="https://github.com/LuxWise/motion"
              target="_blank"
              rel="noopener noreferrer"
            >
              Frontend Repo
            </a>
            <a
              href="https://github.com/LuxWise/apiMotion.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              Backend Repo
            </a>
          </div>
        </footer>
      </motion.main>
    </Wave>
  );
};

export default Home;
