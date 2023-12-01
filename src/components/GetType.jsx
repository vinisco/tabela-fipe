import React from "react";
import DropTypeItem from "./dropItems/DropTypeItem";
import { useParamsContext } from "../context/ParamsProvider";

export default function GetType() {
  const {
    setType,
    setBrand,
    setModel,
    setYear,
    setDataModel,
    setDataYear,
    setDataResult,
  } = useParamsContext();

  function handleSetVehicleType(name) {
    setType({ apiName: name });
    setBrand({ nome: "Marca do Veículo", codigo: "" });
    setModel({ nome: "Modelo do Veículo", codigo: "" });
    setYear({ nome: "Ano do Veículo", codigo: "" });
    setDataModel([]);
    setDataYear([]);
    setDataResult([]);
  }

  return (
    <>
      <div className="dropdown m-2">
        <select
          className="btn btn-secondary dropdown-toggle w-50"
          onChange={(e) => handleSetVehicleType(e.target.value)}
        >
          <DropTypeItem name={{ nome: "Moto", apiName: "motos" }} />
          <DropTypeItem name={{ nome: "Carro", apiName: "carros" }} />
          <DropTypeItem name={{ nome: "Caminhão", apiName: "caminhoes" }} />
        </select>
      </div>
    </>
  );
}
