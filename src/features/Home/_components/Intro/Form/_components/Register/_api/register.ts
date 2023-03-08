import axios from 'axios';
import { IObject } from '@/types/global';

interface IFetchRegister {
  headers: IObject<string>;
  data: IObject<string>;
};

const baseURL = process.env?.NEXT_PUBLIC_BASEURL ?? "http://localhost:8888";

export async function fetchRegister({headers, data}:IFetchRegister) {
  const url = `${baseURL}/api/v1/users/register`;
  const registerFetch = await axios.post<IObject<string|{}>>(url, {headers}, data);
  const resRegister = registerFetch?.data;
  console.log('resRegister', resRegister);
  return resRegister;

};
