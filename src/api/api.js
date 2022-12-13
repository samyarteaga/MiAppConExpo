const BASE_URL = "https://jsonplaceholder.typicode.com";
export const ALBUMS = BASE_URL + "/albums";

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
}

export default new API();
