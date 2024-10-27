import { useDataContext } from "@/hooks";

interface CreateButtonsProps {
  setActive: (active: boolean) => void;
  data: { marca: string; sucursal: string; aspirante: string };
  clearData: () => void;
}

export const CreateButtons = ({
  setActive,
  data,
  clearData,
}: CreateButtonsProps) => {
  const { postData } = useDataContext();

  const handleCreate = async () => {
    await postData(data);
    setActive(false);
    clearData();
  };

  const handleCancel = () => {
    setActive(false);
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
          <p className="text-lg">Crear</p>
        </div>
      </div>
    </div>
  );
};
