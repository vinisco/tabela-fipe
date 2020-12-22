import React from "react";
import { useParamsContext } from "../../context/ParamsProvider";

export default function DropBrandItem() {
  const { setModel, dataModel, setYear, setDataResult } = useParamsContext();

  return (
    <>
      {dataModel.length
        ? dataModel.map(({ nome, codigo }) => {
            function handleSetVehicleType() {
              setModel({ nome, codigo });
              setYear({ nome: "Ano do Veículo", codigo: "" });
              setDataResult([]);
            }
            return (
              <span
                key={codigo}
                className="dropdown-item"
                onClick={handleSetVehicleType}
              >
                {nome}
              </span>
            );
          })
        : ""}
    </>
  );
}
