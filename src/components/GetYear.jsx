import React from "react";
import DropYearItem from "./dropItems/DropYearItem";
import { useParamsContext } from "../context/ParamsProvider";

export default function GetBrand() {
  const { year } = useParamsContext();

  return (
    <>
      <div className="dropdown m-2 ">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {year.nome}
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <DropYearItem />
        </div>
      </div>
    </>
  );
}
