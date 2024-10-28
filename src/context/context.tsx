"use client";

import { Data } from "@/api";
import { createContext, useState, useCallback } from "react";

interface DataRowId {
  id: number;
  marca: string;
  sucursal: string;
  aspirante: string;
}

interface DataPost {
  marca: string;
  sucursal: string;
  aspirante: string;
}

interface DataContextType {
  data: DataRowId[];
  getData: () => Promise<void>;
  getDataById: (id: number) => Promise<DataRowId | undefined>;
  postData: (data: DataPost) => Promise<void>;
  refreshData: () => Promise<void>;
  updateData: (id: number, data: DataPost) => Promise<void>;
  deleteData: (id: number) => Promise<void | undefined>;
  createActive: boolean;
  setCreateActive?: (active: boolean) => void;
  editActive: boolean;
  setEditActive?: (active: boolean) => void;
  updateId: number | null;
  setUpdateId?: (id: number) => void;
}

interface ContextProps {
  children: React.ReactNode;
}

const DefaultContext: DataContextType = {
  data: [],
  getData: async () => {},
  getDataById: async () => undefined,
  postData: async () => {},
  updateData: async () => {},
  refreshData: async () => {},
  deleteData: async () => {},
  createActive: false,
  setCreateActive: () => {},
  editActive: false,
  setEditActive: () => {},
  updateId: null,
  setUpdateId: () => {},
};

export const DataContext = createContext<DataContextType>(DefaultContext);

export const DataProvider = ({ children }: ContextProps) => {
  const [data, setData] = useState<DataRowId[]>([]);
  const [editActive, setEditActive] = useState(false);
  const [createActive, setCreateActive] = useState(false);
  const [updateId, setUpdateId] = useState<number | null>(null);

  const api = new Data();

  const getData = useCallback(async () => {
    const allData = await api.getAllData();
    setData(allData);
  }, []);

  const getDataById = async (id: number) => {
    const result = await api.getAllDataById(id);
    return result;
  };

  const postData = async (newData: DataPost) => {
    await api.postData(newData);
    await refreshData();
  };

  const updateData = async (id: number, data: DataPost) => {
    await api.updateData(id, data);
    await refreshData();
  };

  const refreshData = useCallback(async () => {
    await getData();
  }, [getData]);

  const deleteData = async (id: number) => {
    await api.deleteData(id);
    await refreshData();
  };

  return (
    <DataContext.Provider
      value={{
        data,
        getData,
        getDataById,
        postData,
        updateData,
        refreshData,
        deleteData,
        createActive,
        setCreateActive,
        editActive,
        setEditActive,
        updateId,
        setUpdateId,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
