import React from "react";
import { useParamsContext } from "../../context/ParamsProvider";

export default function DropBrandItem() {
  const { setBrand, dataBrand, setModel } = useParamsContext();

  return (
    <>
      {dataBrand.length
        ? dataBrand.map(({ nome, codigo }) => {
            function handleSetVehicleType() {
              setBrand({ nome, codigo });
              setModel({ nome: "Modelo do Veículo", codigo: "" });
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
