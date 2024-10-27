import { ENV } from "@/utils";
import axios from "axios";

export class Data {
  async getAllData() {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.DATA}`;
      const response = await axios.get(url);
      if (response.status !== 200) throw response.data;
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async getAllDataById(id: number) {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.DATA_BY_ID}/${id}/`;
      const response = await axios.get(url);
      if (response.status !== 200) throw response.data;
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async postData(data: { marca: string; sucursal: string; aspirante: string }) {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.DATA}`;
      const response = await axios.post(url, data);
      if (response.status !== 201) throw response.data;
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async deleteData(id: number) {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.DATA_BY_ID}/${id}/`;
      const response = await axios.delete(url);
      if (response.status !== 200) throw response.data;
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}
