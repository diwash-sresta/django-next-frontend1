export default class ApiProxy {

  static async getHeaders(requireAuth) {
    let headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    const authToken = getToken();
    if (authToken && requireAuth) {
      headers["Authorization"] = `Bearer ${authToken}`;
    }
    return headers
  }

  static async post(endpoiont, object, requireAuth) {
    const jsonData = JSON.stringify(object);
    const headers = await ApiProxy.getHeaders(requireAuth)
    const requestOptions = {
      method: "POST",
      headers: headers,
      body: jsonData,
    };
    return await fetch(endpoiont, requestOptions);
  }
  static async get(endpoiont, requireAuth) {
     const headers = await ApiProxy.getHeaders(requireAuth)
    const requestOptions = {
      method: "GET",
      headers: headers,
    };
    return await fetch(endpoiont, requestOptions);
  }
}
