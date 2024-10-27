import { motion } from "framer-motion";
import Image from "next/image";

const iconHoverEffect = { rotate: [0, 20, -20, 0] };

interface IconButtonProps {
  iconSrc: string;
  altText: string;
  onClick: () => void;
}

export const IconButton = ({ iconSrc, altText, onClick }: IconButtonProps) => (
  <motion.div
    whileHover={iconHoverEffect}
    animate={{ rotate: 0 }}
    className="mx-5 w-7 h-7 cursor-pointer"
  >
    <Image src={iconSrc} alt={altText} className="w-7 h-7" onClick={onClick} />
  </motion.div>
);
