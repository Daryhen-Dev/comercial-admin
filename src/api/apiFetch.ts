import axios from "axios";
import { urlBase } from "../utils/url";
import { IResponse } from "./report.interface";


export async function apiFetchGet<T>(url: string): Promise<IResponse<T>> {
  try {
    const { data, status } = await axios.get(`${urlBase}${url}`);
    const result = {
      data: data,
      typeStatus: status,
      error: "",
      response: true,
    };
    return result;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorCode = error.code;
      const errorStatus = error.request.status;
      const result: IResponse<T> = {
        data: null as unknown as T,
        typeStatus: errorStatus || 0,
        error: errorCode || "",
        response: false,
      };
      return result;
    } else {
      const result: IResponse<T> = {
        data: error as unknown as T,
        typeStatus: 0,
        error: "",
        response: false,
      };
      return result;
    }
  }
}
