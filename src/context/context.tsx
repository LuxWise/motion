"use client";

import { Data } from "@/api";
import { createContext, useState, useCallback } from "react";

interface DataRow {
  id: number;
  marca: string;
  sucursal: string;
  aspirante: string;
}

interface DataContextType {
  data: DataRow[];
  getData: () => Promise<void>;
  getDataById: (id: number) => Promise<void | undefined>;
  postData: (data: DataRow) => Promise<void>;
  refreshData: () => Promise<void>;
  deleteData: (id: number) => Promise<void | undefined>;
}

interface ContextProps {
  children: React.ReactNode;
}

const DefaultContext: DataContextType = {
  data: [],
  getData: async () => {},
  getDataById: async () => undefined,
  postData: async () => {},
  refreshData: async () => {},
  deleteData: async () => {},
};

export const DataContext = createContext<DataContextType>(DefaultContext);

export const DataProvider = ({ children }: ContextProps) => {
  const [data, setData] = useState<DataRow[]>([]);
  const api = new Data();

  const getData = useCallback(async () => {
    const allData = await api.getAllData();
    setData(allData);
  }, []);

  const getDataById = async (id: number) => {
    const result = await api.getAllDataById(id);
    return result;
  };

  const postData = async (newData: DataRow) => {
    await api.postData(newData);
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
      value={{ data, getData, getDataById, postData, refreshData, deleteData }}
    >
      {children}
    </DataContext.Provider>
  );
};
