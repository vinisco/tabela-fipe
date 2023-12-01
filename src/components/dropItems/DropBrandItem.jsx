import React from "react";
import { useParamsContext } from "../../context/ParamsProvider";

export default function DropBrandItem() {
  const { dataBrand } = useParamsContext();

  return (
    <>
      {dataBrand.length
        ? dataBrand.map(({ nome, codigo }) => {
            return <option value={codigo}>{nome}</option>;
          })
        : ""}
    </>
  );
}
