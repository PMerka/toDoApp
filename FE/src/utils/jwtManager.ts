import { deleteCookie, getCookie, setCookie } from "./cookies";

class JwtManager {
  private cookieName: string;
  constructor() {
    this.cookieName = "jwt";
  }
  getJwt() {
    return getCookie(this.cookieName);
  }
  setJwt(cookie: string) {
    setCookie(this.cookieName, cookie);
  }
  deleteJwt() {
    deleteCookie(this.cookieName);
  }
}

export const jwtManager = new JwtManager();
