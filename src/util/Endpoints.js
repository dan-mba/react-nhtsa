/* 
  Base endpoint for NHTSA Recalls REST API
*/

export const endpoint = "https://api.nhtsa.gov/products/vehicle";
export const recallEndpoint = "https://api.nhtsa.gov/recalls/recallsByVehicle";
export const datatype = "issueType=r";
const proxy = 'https://api.cors.lol/?url=';
export const proxyFetch = (api) => fetch(proxy + encodeURIComponent(api)).then(res => res.json());
