import axios from 'axios';
import { IObject } from '@/types/global';

interface IFetchGet {
  urlPath:string
  headers: IObject<string>;
  data: string;
};

const baseURL = process?.env?.NEXT_PUBLIC_BASEURL ?? "http://localhost:8888";

export async function fetchGet({urlPath, headers, data}:IFetchGet) {
  const fullUrl = `${baseURL}/${urlPath}`;
  const reqGet = await axios.post<IObject<string|{}>>(
    fullUrl,
    data,
    { headers }
  );
  const resGet = reqGet?.data;
  console.log('resGet', resGet);
  return resGet;
};
