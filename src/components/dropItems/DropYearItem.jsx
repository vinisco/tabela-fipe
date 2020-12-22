import React from "react";
import { useParamsContext } from "../../context/ParamsProvider";

export default function DropBrandItem() {
  const { setYear, dataYear } = useParamsContext();

  return (
    <>
      {dataYear.length
        ? dataYear.map(({ nome, codigo }) => {
            function handleSetVehicleType() {
              setYear({ nome, codigo });
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
