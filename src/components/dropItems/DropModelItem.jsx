import React from "react";
import { useParamsContext } from "../../context/ParamsProvider";

export default function DropBrandItem() {
  const { dataModel } = useParamsContext();

  return (
    <>
      {dataModel.length
        ? dataModel.map(({ nome, codigo }) => {
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
