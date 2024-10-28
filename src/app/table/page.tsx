"use client";

import { Form } from "@/components";
import { Table as DataTable } from "@/components";
import { useDataContext } from "@/hooks";
import { useEffect } from "react";
import Image from "next/image";
import motionlogo from "@/assets/Imagologotipo_motion.svg";

const Table = () => {
  const { data, refreshData } = useDataContext();

  useEffect(() => {
    refreshData();
  }, [refreshData]);

  return (
    <main className="flex w-screen h-screen">
      <section className="flex justify-center w-2/5 ml-20">
        <Form />
      </section>
      <section className="flex justify-center my-16 w-3/5">
        <DataTable usedata={data} />
      </section>
      <div className="flex fixed w-full h-full justify-center items-end bottom-10 -z-10 select-none">
        <Image src={motionlogo} alt="" />
      </div>
    </main>
  );
};

export default Table;
