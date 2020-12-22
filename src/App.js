import React from "react";
import ParamsProvider from "./context/ParamsProvider";
import GetBrand from "./components/GetBrand";
import GetType from "./components/GetType";
import GetModel from "./components/GetModel";
import GetYear from "./components/GetYear";
import Results from "./components/Results";
import Header from "./components/Header";

export default function App() {
  return (
    <ParamsProvider>
      <Header />
      <div className="container">
        <div className="row justify-content-center ">
          <div className="col text-center m-2">
            <GetType />
            <GetBrand />
            <GetModel />
            <GetYear />
          </div>
        </div>
        <div className="row justify-content-center">
          <Results />
        </div>
      </div>
    </ParamsProvider>
  );
}
