import { useEffect, useState } from 'react';
import { IResLogin } from '@/features/Home/_components/Intro/Form/_components/Login/Login';
import { ILoginForm } from '@/features/Home/_components/Intro/Form/_components/Login/_components/LoginInputs/LoginInputs';
import { urlPaths } from '../misc';
import { fetchGet, IFetchGet } from '../_api';

export type TStatus = 'success' | 'failed';

interface IUseLoginProps {
  form: ILoginForm;
};

interface IUseLoginReturn {
  login: ({ form }: IUseLoginProps) => Promise<TStatus>;
};

const useLogin = ():IUseLoginReturn => {
  const csrfToken = process?.env?.NEXT_PUBLIC_CSRFTOKEN ?? "";
  const initialLoginForm = {access:'', refresh:''};
  let status:TStatus = 'failed';
  const [ tokens, setTokens ] = useState(initialLoginForm);

  useEffect(() => {
    storeTokens();

  }, [tokens]);

  function storeTokens() {
    if (!tokens.access || !tokens.refresh) return tokens;
    localStorage.setItem('tokens', JSON.stringify(tokens));
  };


  const login = async ({form}:IUseLoginProps) => {
    const payload:IFetchGet = {
      urlPath: urlPaths['login'],
      headers: {
        "Content-Type": "application/json",
        "X-CSRFTOKEN": csrfToken
      },
      data: JSON.stringify({
        "username": form.username,
        "password": form.password,
      }),
    };

    const resFetchLogin: IResLogin = await fetchGet(payload);
    // console.log('resFetchLogin', resFetchLogin);

    if (resFetchLogin?.message === "Login Successful") {
      setTokens({
        access: resFetchLogin.data?.access ?? "",
        refresh: resFetchLogin.data?.refresh ?? ""
      });

      return status = 'success';
    };

    return status;

  };
  return { login };
};

export default useLogin;
