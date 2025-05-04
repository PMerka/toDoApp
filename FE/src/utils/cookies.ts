export const setCookie = (name: string, value: string) => {
  document.cookie = `${name}=${value}`;
};

export const getCookie = (cookieName: string) => {
  const cookieString = document.cookie;
  const cookieArray = cookieString.split("; ");
  const cookiePairs = cookieArray.map((cookie) => cookie.split("="));

  const cookiePair = cookiePairs.find((item) => item[0] === cookieName);

  if (!cookiePair) {
    return;
  }

  return cookiePair[1];
};
