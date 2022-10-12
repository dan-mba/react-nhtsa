/* 
  Base endpoint for NHTSA Recalls REST API
*/

export const endpoint = "one.nhtsa.gov/webapi/api/Recalls/vehicle";
export const datatype = "?format=json";
const proxy = 'https://api.codetabs.com/v1/proxy/?quest=';
export const proxyFetch = (api) => fetch(proxy+api).then(res => res.json());
