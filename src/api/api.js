const BASE_URL = "https://jsonplaceholder.typicode.com";
const BASE_URL_USER = "https://app-fly.fly.dev";

export const ALBUMS = BASE_URL + "/albums";
export const USER = BASE_URL_USER + "/user";

class API {
  async get(url) {
    try {
      const response = await fetch(url, { method: "GET" });
      const data = await response.json();
      return data;
    } catch (e) {
      console.log(e);
    }
  }

  async post(url, data) {
    try {
      const config = {
        method: "POST",
        headers: { "Content-Type": "Application/json" },
        body: JSON.stringify(data),
      };
      const response = await fetch(url, config);
      const res = response.json();
      return res;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new API();
