import { useDataContext } from "@/hooks";
import { useState } from "react";
import { TailSpin } from "react-loader-spinner";

interface CreateButtonsProps {
  data: { marca: string; sucursal: string; aspirante: string };
  clearData: () => void;
}

export const CreateButtons = ({ data, clearData }: CreateButtonsProps) => {
  const { postData, setCreateActive } = useDataContext();
  const [loading, setLoading] = useState(false);

  const handleCreate = async () => {
    if (loading) return;

    if (!data.marca || !data.sucursal || !data.aspirante) {
      alert("Por favor, completar todos los campos antes de crear.");
      return;
    }

    setLoading(true);
    await postData(data);
    setLoading(false);
    if (setCreateActive) {
      setCreateActive(false);
    }
    clearData();
  };

  const handleCancel = () => {
    if (setCreateActive) {
      setCreateActive(false);
    }
    clearData();
  };

  return (
    <div className="flex flex-row gap-9 justify-center items-center">
      <div className="w-8 h-8" />
      <div className="flex w-3/5 gap-8 ">
        <div
          className="createButton border-[#C6007E] hover:bg-[#C6007E]"
          onClick={handleCancel}
        >
          <p className="text-lg">Cancelar</p>
        </div>
        <div
          className="createButton border-[#01BEDB] hover:bg-[#01BEDB]"
          onClick={handleCreate}
        >
          {loading ? (
            <TailSpin color="#01BEDB" height={20} width={20} />
          ) : (
            <p className="text-lg">Crear</p>
          )}
        </div>
      </div>
    </div>
  );
};
