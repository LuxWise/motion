import { motion } from "framer-motion";
import { ReactNode } from "react";

interface waveProps {
  children: ReactNode;
}

export const Wave = ({ children }: waveProps) => {
  return (
    <>
      <motion.div
        initial={{ x: "220vh" }}
        animate={{ x: "0vh" }}
        transition={{
          duration: 10,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
        style={{
          zIndex: -1,
          position: "fixed",
          top: "-100%",
          width: "300vh",
          height: "300vh",
          borderRadius: "50%",
          background: "#ffffff",
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)",
        }}
      />
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </>
  );
};
