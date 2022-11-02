/* 
  Base endpoint for NHTSA Recalls REST API
*/

export const endpoint = "api.nhtsa.gov/products/vehicle";
export const recallEndpoint = "api.nhtsa.gov/recalls/recallsByVehicle";
export const datatype = "issueType=r";
const proxy = 'https://api.codetabs.com/v1/proxy/?quest=';
export const proxyFetch = (api) => fetch(proxy+api).then(res => res.json());
