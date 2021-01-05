const ACCESS_TOKEN_KEY = 'access_token';

export const setAccessToken = (token) => localStorage.setItem(ACCESS_TOKEN_KEY, token);
export const isAuthenticated = () => !!localStorage.getItem(ACCESS_TOKEN_KEY);
