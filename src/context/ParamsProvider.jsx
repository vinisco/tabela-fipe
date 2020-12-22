import React, { createContext, useState, useContext, useEffect } from "react";
import ApiFipe from "../api/fipeApi";
const ParamsContext = createContext();

export default function ParamsProvider({ children }) {
  const [type, setType] = useState({ nome: "Tipos de Veículos", codigo: "" });
  const [model, setModel] = useState({ nome: "Modelo do Veículo", codigo: "" });
  const [brand, setBrand] = useState({ nome: "Marca do Veículo", codigo: "" });
  const [year, setYear] = useState({ nome: "Ano do Veículo", codigo: "" });
  const [dataBrand, setDataBrand] = useState([]);
  const [dataModel, setDataModel] = useState([]);
  const [dataYear, setDataYear] = useState([]);
  const [dataResult, setDataResult] = useState([]);

  useEffect(() => {
    async function fetch() {
      const newBrand = await ApiFipe.getVehicleBrands(type.apiName);
      setDataBrand(newBrand.data);
      setModel({ nome: "Modelo do Veículo", codigo: "" });
      setYear({ nome: "Ano do Veículo", codigo: "" });
    }
    if (type.codigo !== "") {
      fetch();
    }
  }, [type, brand]);

  useEffect(() => {
    async function fetch() {
      const newModel = await ApiFipe.getVehicleModels(
        type.apiName,
        brand.codigo
      );
      setDataModel(newModel.data.modelos);
      setYear({ nome: "Ano do Veículo", codigo: "" });
      setDataYear([]);
    }

    if (brand.codigo !== "") {
      fetch();
    }
  }, [brand, type]);

  useEffect(() => {
    async function fetch() {
      try {
        const newModel = await ApiFipe.getVehicleYears(
          type.apiName,
          brand.codigo,
          model.codigo
        );
        setDataYear(newModel.data);
      } catch (err) {
        console.log(err);
      }
    }
    if (model.codigo !== "" && brand.codigo !== "") {
      fetch();
    }
  }, [brand, type, model, year]);
  useEffect(() => {
    async function fetch() {
      try {
        const result = await ApiFipe.getVehicleResult(
          type.apiName,
          brand.codigo,
          model.codigo,
          year.codigo
        );
        setDataResult(result.data);
      } catch (err) {
        console.log(err);
      }
    }
    if (year.codigo !== "") {
      fetch();
    }
  }, [brand, type, model, year]);

  return (
    <ParamsContext.Provider
      value={{
        type,
        setType,
        model,
        setModel,
        brand,
        setBrand,
        year,
        setYear,
        dataBrand,
        setDataBrand,
        dataModel,
        setDataModel,
        dataYear,
        setDataYear,
        dataResult,
        setDataResult,
      }}
    >
      {children}
    </ParamsContext.Provider>
  );
}

export function useParamsContext() {
  const context = useContext(ParamsContext);
  const {
    type,
    setType,
    brand,
    setBrand,
    model,
    setModel,
    year,
    setYear,
    dataBrand,
    setDataBrand,
    dataModel,
    setDataModel,
    dataYear,
    setDataYear,
    dataResult,
    setDataResult,
  } = context;
  return {
    type,
    setType,
    brand,
    setBrand,
    model,
    setModel,
    year,
    setYear,
    dataBrand,
    setDataBrand,
    dataModel,
    setDataModel,
    dataYear,
    setDataYear,
    dataResult,
    setDataResult,
  };
}
