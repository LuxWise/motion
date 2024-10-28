import Image from "next/image";
import { useEffect, useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import editIcon from "@/assets/Icon_editar1.svg";
import editIconInactive from "@/assets/Icon_editar.svg";
import deleteIcon from "@/assets/Icon_eliminar1.svg";
import deleteIconInactive from "@/assets/Icon_eliminar.svg";
import "./table.css";
import { useDataContext } from "@/hooks";

interface DataRow {
  id: number;
  marca: string;
  sucursal: string;
  aspirante: string;
}

interface TableProps {
  usedata: DataRow[];
}

export const Table = ({ usedata }: TableProps) => {
  const [data, setData] = useState<DataRow[]>([]);
  const [pending, setPending] = useState(true);
  const [deletingRow, setDeletingRow] = useState<number | null>(null);

  const {
    deleteData,
    setEditActive,
    createActive,
    setUpdateId,
    editingRow,
    setEditingRow,
  } = useDataContext();

  useEffect(() => {
    setData(usedata);
    setPending(usedata.length === 0);
  }, [usedata]);

  const handleEdit = (id: number) => {
    if (editingRow === null) {
      setEditingRow(id);
      if (setEditActive && !createActive) {
        setEditActive(true);
      }
      if (setUpdateId) {
        setUpdateId(id);
      }
    }
  };

  const handleDelete = async (id: number) => {
    setDeletingRow(id);
    setTimeout(() => {
      setData(prevData => prevData.filter(row => row.id !== id));
      setDeletingRow(null);
    }, 200);
    deleteData(id);
    setEditingRow(null);
  };

  const renderCell = (content: React.ReactNode, rowId: number) => (
    <div
      className={`${
        deletingRow === rowId ? "row-deleting" : ""
      } w-full pl-5 text-lg text-[#c5c5c5]`}
    >
      {content}
    </div>
  );

  const columns: TableColumn<DataRow>[] = [
    {
      name: "Marca",
      selector: row => row.marca,
      sortable: true,
      cell: row => renderCell(row.marca, row.id),
    },
    {
      name: "Sucursal",
      selector: row => row.sucursal,
      sortable: true,
      cell: row => renderCell(row.sucursal, row.id),
    },
    {
      name: "Aspirantes",
      cell: row => (
        <div
          className={`${
            deletingRow === row.id ? "row-deleting" : ""
          } flex w-full justify-between items-center pl-5 text-lg text-[#c5c5c5]`}
        >
          <p>{row.aspirante}</p>
          <div className="flex gap-3">
            {editingRow !== null && editingRow !== row.id ? (
              <Image
                src={editIconInactive}
                alt=""
                className="cursor-not-allowed w-5 h-5"
              />
            ) : (
              <Image
                src={editIcon}
                alt="Edit"
                onClick={() => handleEdit(row.id)}
                className="cursor-pointer w-5 h-5"
              />
            )}

            {editingRow !== null ? (
              <Image
                src={deleteIconInactive}
                alt=""
                className="cursor-not-allowed w-5 h-5"
              />
            ) : (
              <Image
                src={deleteIcon}
                alt="Delete"
                onClick={() => handleDelete(row.id)}
                className="cursor-pointer w-5 h-5"
              />
            )}
          </div>
        </div>
      ),
      ignoreRowClick: true,
    },
  ];

  const customStyles = {
    headCells: {
      style: {
        color: "#FFFFFF",
        fontSize: "20px",
        fontWeight: "500",
        backgroundColor: "#e280be",
        border: "2px solid #FFFFFF",
        paddingLeft: "85px",
      },
    },
    cells: {
      style: {
        borderBottom: "2px solid #e280be",
      },
    },
  };

  return (
    <div className="w-full pr-20">
      <DataTable
        customStyles={customStyles}
        progressPending={pending}
        columns={columns}
        data={data}
        pagination
        paginationPerPage={8}
        paginationRowsPerPageOptions={[8]}
      />
    </div>
  );
};
