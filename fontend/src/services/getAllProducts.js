import http from "./httpService"

export const getAllProducts = () => http.get("/product");