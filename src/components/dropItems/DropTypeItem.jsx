import React from "react";
import { useParamsContext } from "../../context/ParamsProvider";

export default function DropTypeItem({ name }) {
  const {
    setType,
    setBrand,
    setModel,
    setYear,
    setDataModel,
    setDataYear,
  } = useParamsContext();

  function handleSetVehicleType() {
    setType(name);
    setBrand({ nome: "Marca do Veículo", codigo: "" });
    setModel({ nome: "Modelo do Veículo", codigo: "" });
    setYear({ nome: "Ano do Veículo", codigo: "" });
    setDataModel([]);
    setDataYear([]);
  }

  return (
    <>
      <span className="dropdown-item" onClick={handleSetVehicleType}>
        {name.nome}
      </span>
    </>
  );
}
