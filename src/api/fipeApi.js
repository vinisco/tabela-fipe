import axios from "axios";

const API_URL = "https://parallelum.com.br/fipe/api/v1/";

const ApiFipe = {
  getVehicleBrands: async function (type) {
    return await axios.get(`${API_URL}${type}/marcas`);
  },

  getVehicleModels: async function (type, brand) {
    return await axios.get(`${API_URL}${type}/marcas/${brand}/modelos`);
  },

  getVehicleYears: async function (type, brand, model) {
    return await axios.get(
      `${API_URL}${type}/marcas/${brand}/modelos/${model}/anos`
    );
  },
  getVehicleResult: async function (type, brand, model, year) {
    return await axios.get(
      `${API_URL}${type}/marcas/${brand}/modelos/${model}/anos/${year}`
    );
  },
};

export default ApiFipe;
