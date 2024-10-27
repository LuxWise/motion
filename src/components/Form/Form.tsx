// imports
import { motion } from "framer-motion";
import { InputIcon } from "./InputIcon";
import { CreateButtons } from "./CreateButtons";
import { useState } from "react";
import { IconButton } from "./IconButton";
import createIcon from "@/assets/Icon_crear.svg";
import carIcon from "@/assets/Icon_vehiculo.svg";
import carIconActive from "@/assets/Icon_vehiculo1.svg";
import locationIcon from "@/assets/Icon_puntoubicacion.svg";
import locationIconActive from "@/assets/Icon_puntoubicacion1.svg";
import userIcon from "@/assets/Icon_persona.svg";
import userIconActive from "@/assets/Icon_persona1.svg";

const containerVariants = {
  hidden: { x: "-100%", opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

export const Form = () => {
  const [marca, setMarca] = useState("");
  const [sucursal, setSucursal] = useState("");
  const [aspirante, setAspirante] = useState("");
  const [isCreateActive, setCreateActive] = useState(false);

  const clearFormData = () => {
    setMarca("");
    setSucursal("");
    setAspirante("");
  };

  const handleCreateClick = () => setCreateActive(true);

  return (
    <motion.div
      className={`grid grid-cols-1 w-3/4 ${
        isCreateActive ? "h-80" : "h-64"
      } py-5 my-16 rounded-2xl shadow-shadowtable transition-all duration-500`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.1 }}
    >
      <IconButton
        iconSrc={createIcon}
        altText="Create icon"
        onClick={handleCreateClick}
      />

      <InputIcon
        icon={isCreateActive ? carIconActive : carIcon}
        placeholder="Marca"
        input={setMarca}
        value={marca}
      />
      <InputIcon
        icon={isCreateActive ? locationIconActive : locationIcon}
        placeholder="Sucursal"
        input={setSucursal}
        value={sucursal}
      />
      <InputIcon
        icon={isCreateActive ? userIconActive : userIcon}
        placeholder="Aspirante"
        input={setAspirante}
        value={aspirante}
      />

      {isCreateActive && (
        <CreateButtons
          setActive={setCreateActive}
          data={{ marca, sucursal, aspirante }}
          clearData={clearFormData}
        />
      )}
    </motion.div>
  );
};
