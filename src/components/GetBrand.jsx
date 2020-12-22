import React from "react";
import DropBrandItem from "./dropItems/DropBrandItem";
import { useParamsContext } from "../context/ParamsProvider";

export default function GetBrand() {
  const { brand } = useParamsContext();

  return (
    <>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {brand.nome}
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <DropBrandItem />
        </div>
      </div>
    </>
  );
}
