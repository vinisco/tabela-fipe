import React from "react";
import DropTypeItem from "./dropItems/DropTypeItem";
import { useParamsContext } from "../context/ParamsProvider";

export default function GetType() {
  const { type } = useParamsContext();

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
          {type.nome}
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <DropTypeItem name={{ nome: "Moto", apiName: "motos" }} />
          <DropTypeItem name={{ nome: "Carro", apiName: "carros" }} />
          <DropTypeItem name={{ nome: "Caminhão", apiName: "caminhoes" }} />
        </div>
      </div>
    </>
  );
}
