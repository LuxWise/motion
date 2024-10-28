import { ENV } from "@/utils";
import axios from "axios";

interface DataRow {
  marca: string;
  sucursal: string;
  aspirante: string;
}

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

  async postData(data: DataRow) {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.DATA}`;
      const response = await axios.post(url, data);
      if (response.status !== 201) throw response.data;
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async updateData(id: number, data: DataRow) {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.DATA_BY_ID}/${id}/`;
      const response = await axios.put(url, data);
      if (response.status !== 200) throw response.data;
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
