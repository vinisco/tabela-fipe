import React from "react";
import DropYearItem from "./dropItems/DropYearItem";
import { useParamsContext } from "../context/ParamsProvider";

export default function GetBrand() {
  const { setYear } = useParamsContext();

  function handleSetVehicleType(name) {
    setYear({ nome: name, codigo: name });
  }

  return (
    <>
      <div className="dropdown m-2 ">
        <select
          onChange={(e) => handleSetVehicleType(e.target.value)}
          className="btn btn-secondary dropdown-toggle w-50"
        >
          <DropYearItem />
        </select>
      </div>
    </>
  );
}
