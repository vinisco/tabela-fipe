import React from "react";
import { useParamsContext } from "../../context/ParamsProvider";

export default function DropBrandItem() {
  const { dataYear } = useParamsContext();

  return (
    <>
      {dataYear.length
        ? dataYear.map(({ nome, codigo }) => {
            return (
              <option key={codigo} value={codigo}>
                {nome}
              </option>
            );
          })
        : ""}
    </>
  );
}
