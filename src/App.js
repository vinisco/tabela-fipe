import React from "react";
import ParamsProvider from "./context/ParamsProvider";
import GetBrand from "./components/GetBrand";
import GetType from "./components/GetType";
import GetModel from "./components/GetModel";
import GetYear from "./components/GetYear";
import Results from "./components/Results";

export default function App() {
  return (
    <ParamsProvider>
      <GetType />
      <GetBrand />
      <GetModel />
      <GetYear />
      <Results />
    </ParamsProvider>
  );
}
