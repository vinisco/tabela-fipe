import React from "react";
import DropModelItem from "./dropItems/DropModelItem";
import { useParamsContext } from "../context/ParamsProvider";

export default function GetBrand() {
  const { model } = useParamsContext();

  return (
    <>
      <div className="dropdown m-2">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {model.nome}
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <DropModelItem />
        </div>
      </div>
    </>
  );
}
