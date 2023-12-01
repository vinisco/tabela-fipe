import React from "react";
import DropBrandItem from "./dropItems/DropBrandItem";
import { useParamsContext } from "../context/ParamsProvider";

export default function GetBrand() {
  const { setBrand, setModel, setDataResult } = useParamsContext();

  function handleSetVehicleType(name) {
    setBrand({ nome: name, codigo: name });
    setModel({ nome: "Modelo do Veículo", codigo: "" });
    setDataResult([]);
  }

  return (
    <>
      <div className="dropdown m-2">
        <select
          className="btn btn-secondary dropdown-toggle w-50"
          onChange={(e) => handleSetVehicleType(e.target.value)}
        >
          <DropBrandItem />
        </select>
      </div>
    </>
  );
}
