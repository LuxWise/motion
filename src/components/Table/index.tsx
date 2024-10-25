import Image from "next/image";
import { useEffect, useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import editIcon from "@/assets/Icon_editar1.svg";
import deleteIcon from "@/assets/Icon_eliminar1.svg";
import "./table.css";

interface DataRow {
  id: number;
  name: string;
  age: number;
}

interface TableProps {
  usedata: DataRow[];
}

export const Table = ({ usedata }: TableProps) => {
  const [data, setData] = useState<DataRow[]>(usedata);
  const [pending, setPending] = useState(true);
  const [deletingRow, setDeletingRow] = useState<number | null>(null);

  useEffect(() => {
    const loadData = setTimeout(() => {
      setPending(false);
    }, 1000);
    return () => clearTimeout(loadData);
  }, []);

  const handleEdit = (id: number) => {
    console.log("Edit item:", id);
  };

  const handleDelete = (id: number) => {
    setDeletingRow(id);
    setTimeout(() => {
      setData(prevData => prevData.filter(row => row.id !== id));
      setDeletingRow(null);
    }, 500);
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
      selector: row => row.name,
      sortable: true,
      cell: row => renderCell(row.name, row.id),
    },
    {
      name: "Sucursal",
      selector: row => row.age,
      sortable: true,
      cell: row => renderCell(row.age, row.id),
    },
    {
      name: "Aspirantes",
      cell: row => (
        <div
          className={`${
            deletingRow === row.id ? "row-deleting" : ""
          } flex w-full gap-3 justify-center items-center pl-5 text-lg text-[#c5c5c5]`}
        >
          <p>{row.age}</p>
          <Image
            src={editIcon}
            alt="Edit"
            onClick={() => handleEdit(row.id)}
            className="cursor-pointer w-5 h-5"
          />
          <Image
            src={deleteIcon}
            alt="Delete"
            onClick={() => handleDelete(row.id)}
            className="cursor-pointer w-5 h-5"
          />
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
    <div className="w-5/6">
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
