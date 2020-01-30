import axios from "axios";

const requset = axios.create({
  baseURL: "http://localhost:3000"
});
export const getListByPagination = (pageIndex, pageSize) => {
  return requset.get("/api/v1/persons");
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve(mockAddList);
  //     }, 1000);
  //   });
};

export const savePerson = (name, phone) => {
  return requset.post("/api/v1/persons", { name, phone });
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => resolve(), 1000);
  //   });
};
