import React from "react";
import DropModelItem from "./dropItems/DropModelItem";
import { useParamsContext } from "../context/ParamsProvider";

export default function GetBrand() {
  const { setModel, setYear, setDataResult } = useParamsContext();

  function handleSetVehicleType(name) {
    setModel({ nome: name, codigo: name });
    setYear({ nome: "Ano do Veículo", codigo: "" });
    setDataResult([]);
  }

  return (
    <>
      <div className="dropdown m-2">
        <select
          className="btn btn-secondary dropdown-toggle w-50"
          onChange={(e) => handleSetVehicleType(e.target.value)}
        >
          <DropModelItem />
        </select>
      </div>
    </>
  );
}
