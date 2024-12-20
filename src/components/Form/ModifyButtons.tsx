import { useDataContext } from "@/hooks";
import { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import cancel from "@/assets/Icon_cancelar.svg";
import confirm from "@/assets/Icon_confirmar.svg";
import Image from "next/image";

interface ModifyButtonsProps {
  data: { marca: string; sucursal: string; aspirante: string };
  clearData: () => void;
}

export const ModifyButtons = ({ data, clearData }: ModifyButtonsProps) => {
  const { setEditActive, updateData, updateId, setEditingRow } =
    useDataContext();
  const [loading, setLoading] = useState(false);

  const handleCancel = () => {
    setEditingRow(null);

    if (setEditActive) {
      setEditActive(false);
      clearData();
    }
  };

  const handleEdit = async () => {
    if (loading) return;

    if (updateId !== null) {
      setLoading(true);
      await updateData(updateId, data);
      if (setEditActive) {
        setEditActive(false);
        clearData();
        setLoading(false);
        setEditingRow(null);
      }
    }
  };

  return (
    <div className="flex flex-row gap-9 justify-end items-center">
      <div className="w-8 h-8" />
      <div className="flex w-3/5 gap-5 justify-end mr-12 ">
        <Image
          src={cancel}
          alt=""
          className="cursor-pointer w-10 h-10"
          onClick={handleCancel}
        />
        {loading ? (
          <div className="flex items-center border-[#01BEDB]">
            <TailSpin color="#01BEDB" height={30} width={30} />
          </div>
        ) : (
          <Image
            src={confirm}
            alt=""
            className="cursor-pointer w-10 h-10"
            onClick={handleEdit}
          />
        )}
      </div>
    </div>
  );
};
