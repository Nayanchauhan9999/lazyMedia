import axios, {AxiosRequestConfig} from 'axios';
import {baseURL} from './endpoints';
import {AsyncKey, getData} from '@utils/constant/asyncStore';

export const AxiosInstance = axios.create({
  baseURL: baseURL,
});

AxiosInstance.interceptors.request.use(async config => {
  const token = await getData<string>(AsyncKey.TOKEN);
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});

export const GET = async (url: string, config?: AxiosRequestConfig) => {
  const response = await AxiosInstance.get(url, {...config, timeout: 15000});
  return response;
};

export const POST = async (url: string, body: any) => {
  const response = await AxiosInstance.post(url, body, {
    timeout: 25000,
  });
  return response;
};

export const POST_FORM = async (url: string, body: any) => {
  const response = await AxiosInstance.postForm(url, body, {
    timeout: 10000,
  });
  return response;
};

export const PATCH = async (url: string, body: any) => {
  const response = await AxiosInstance.patch(url, body);
  return response;
};

export const PATCH_FORM = async (url: string, body: any) => {
  const response = await AxiosInstance.patchForm(url, body);
  return response;
};

export const PUT = async (url: string, body: any) => {
  const response = await AxiosInstance.put(url, body);
  return response;
};

export const DELETE = async (url: string) => {
  const response = await AxiosInstance.delete(url);
  return response;
};

export const POST_MULTIFORM = async (body: any, url: string) => {
  const response = await AxiosInstance.post(url, body, {
    headers: {'Content-Type': 'multipart/form-data'},
  });
  return response;
};
