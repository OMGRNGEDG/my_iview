import Cookies from 'js-cookie';

export const setToken = (token, tokenName = "token") => {
  Cookies.set(tokenName, token);
}

export const getToken = (tokenName = "token") => Cookies.get(tokenName)
