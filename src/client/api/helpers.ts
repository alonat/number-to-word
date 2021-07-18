type METHOD = 'GET' | 'POST' | 'PUT' | 'DELETE';

const baseUrl = 'http://localhost:3002';

const createRequest = (method: METHOD) => async (url: string, data?: { [key: string]: string }) => {
  const response = await fetch(`${baseUrl}/${url}`, {
    method,
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json();
};

export const createGetRequest = createRequest('GET');

export const getUrlWithParams = (url: string, params: { [key: string]: string }) => Object
  .keys(params)
  .reduce((resultUrl, key) => `${resultUrl}&${key}=${params[key]}`, `${url}?`);
