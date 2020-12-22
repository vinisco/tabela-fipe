import React from "react";
import { useParamsContext } from "../context/ParamsProvider";

export default function Results() {
  const { dataResult, type } = useParamsContext();
  console.log(dataResult);

  return (
    <>
      {dataResult.Modelo ? (
        <div className="card text-center">
          <div className="card-body">
            <h5 className="card-title">
              {type.nome}: {dataResult.Marca}
            </h5>
            <p className="card-text">Modelo: {dataResult.Modelo}</p>
            <p className="card-text">Ano: {dataResult.AnoModelo}</p>
            <h5 className="card-text">
              <strong>Valor: {dataResult.Valor}</strong>
            </h5>
            <a
              href={`https://www.google.com/search?q=${dataResult.Modelo}+${dataResult.Marca}+${dataResult.AnoModelo}&tbm=isch`}
              className="btn btn-primary"
            >
              Pesquisar imagem no google
            </a>
          </div>
          <div className="card-footer text-muted">
            {dataResult.MesReferencia}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
