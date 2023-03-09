import { IResLogin, ITokens } from '@/features/Home/_components/Intro/Form/_components/Login/Login';
import { ILoginForm } from '@/features/Home/_components/Intro/Form/_components/Login/_components/LoginInputs/LoginInputs';
import { useEffect, useRef, useState } from 'react';
import { urlPaths } from '../misc';
import { fetchGet, IFetchGet } from '../_api';

interface IUseLoginProps {
  form: ILoginForm;
};

interface IUseLoginReturn {
  login: ({ form }: IUseLoginProps) => Promise<void>;
};

const useLogin = ():IUseLoginReturn => {
  const csrfToken = process?.env?.NEXT_PUBLIC_CSRFTOKEN ?? "";
  const initialLoginForm = {access:'', refresh:''};
  let status = 'failed'; //
  const [ tokens, setTokens ] = useState(initialLoginForm);

  useEffect(() => {
    storeTokens();

  }, [tokens]);

  function storeTokens() {
    if (!tokens.access || !tokens.refresh) return tokens;
    status = 'success';
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

    if (true) {

      setTokens({
        access: resFetchLogin.data?.access ?? "",
        refresh: resFetchLogin.data?.refresh ?? ""
      });
    };

  };
  return { login };
};

export default useLogin;
