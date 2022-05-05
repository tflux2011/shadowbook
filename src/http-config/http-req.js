import { GET_USER_TOKEN } from "../browser-db-config/localStorage";
import { HTTP_CLIENT } from "./axios-config";

function HTTP_REQUEST(httpRequestData) {
  let file = false;

  if (httpRequestData.fileUpload) {
    file = true;
  }

  if (httpRequestData.method === "POST")
    return postRequest(httpRequestData, file);
  else if (httpRequestData.method === "GET") return getRequest(httpRequestData);
  else if (httpRequestData.method === "DELETE")
    return deleteRequest(httpRequestData);
  else if (httpRequestData.method === "PATCH")
    return patchRequest(httpRequestData);
  else if (httpRequestData.method === "PUT") return putRequest(httpRequestData);
}

function setAuthHeader(file) {
  return {
    headers: {
      "x-auth-token": `${GET_USER_TOKEN()}`,
      fileUploadheader: file ? { "Content-Type": "multipart/form-data" } : {},
      "Content-Type": "application/json",
    },
  };
}

async function postRequest(requestData, file) {
  const requestConfig = requestData.authRequest ? setAuthHeader(file) : {};
  try {
    const res = await HTTP_CLIENT.post(
      requestData.url,
      requestData.body,
      requestConfig
    );
    return res.data;
  } catch (error) {
    return error;
  }
}

async function getRequest(requestData) {
  const requestConfig = requestData.authRequest ? setAuthHeader() : {};
  try {
    const res = await HTTP_CLIENT.get(requestData.url, requestConfig);
    return requestData.headers ? res : res.data;
  } catch (error) {
    return error;
  }
}

async function deleteRequest(requestData) {
  const requestConfig = requestData.authRequest ? setAuthHeader() : {};
  try {
    const res = await HTTP_CLIENT.delete(requestData.url, requestConfig);
    return res.data;
  } catch (error) {
    return error;
  }
}

async function patchRequest(requestData) {
  const requestConfig = requestData.authRequest ? setAuthHeader() : {};
  try {
    const res = await HTTP_CLIENT.patch(
      requestData.url,
      requestData.body,
      requestConfig
    );
    return res.data;
  } catch (error) {
    return error;
  }
}

async function putRequest(requestData) {
  const requestConfig = requestData.authRequest ? setAuthHeader() : {};
  try {
    const res = await HTTP_CLIENT.put(
      requestData.url,
      requestData.body,
      requestConfig
    );
    return res.data;
  } catch (error) {
    return error;
  }
}

export { HTTP_REQUEST };
