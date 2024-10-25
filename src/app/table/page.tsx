"use client";

import { Table as DataTable } from "@/components/Table";
import Image from "next/image";
import car from "@/assets/Icon_vehiculo.svg";
import location from "@/assets/Icon_puntoubicacion.svg";
import user from "@/assets/Icon_persona.svg";

interface DataRow {
  id: number;
  name: string;
  age: number;
}

const initialData: DataRow[] = [
  { id: 1, name: "John Doe", age: 28 },
  { id: 2, name: "Jane Doe", age: 22 },
  { id: 3, name: "John Doe", age: 28 },
  { id: 4, name: "Jane Doe", age: 22 },
  { id: 5, name: "John Doe", age: 28 },
  { id: 6, name: "Jane Doe", age: 22 },
  { id: 7, name: "John Doe", age: 28 },
  { id: 8, name: "Jane Doe", age: 22 },
  { id: 9, name: "John Doe", age: 28 },
  { id: 10, name: "Jane Doe", age: 22 },
  { id: 11, name: "John Doe", age: 28 },
  { id: 12, name: "Jane Doe", age: 22 },
];

export default function Table() {
  return (
    <main className="flex w-screen h-screen">
      <section className="flex justify-center w-2/5">
        <div className="grid grid-cols-1 w-3/4 h-64 py-5 my-16 rounded-2xl shadow-shadowtable">
          <div className="flex flex-row gap-9 justify-center items-center">
            <Image src={car} alt="img" className="w-8 h-8" />
            <input className="w-3/5 outline-none border-2 py-2 px-2 rounded-xl border-[#c5c5c5] "></input>
          </div>
          <div className="flex flex-row gap-9 justify-center items-center">
            <Image src={location} alt="img" className="w-8 h-8" />
            <input className="w-3/5 outline-none border-2 py-2 px-2 rounded-xl border-[#c5c5c5] "></input>
          </div>
          <div className="flex flex-row gap-9 justify-center items-center">
            <Image src={user} alt="img" className="w-8 h-8" />
            <input className="w-3/5 outline-none border-2 py-2 px-2 rounded-xl border-[#c5c5c5] "></input>
          </div>
        </div>
      </section>
      <section className="flex justify-center my-16 w-3/5">
        <DataTable usedata={initialData} />
      </section>
    </main>
  );
}
