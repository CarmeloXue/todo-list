import axios from "axios";

const requset = axios.create({
    //just convienince to debug locally and online
  baseURL: "http://ec2-52-221-181-89.ap-southeast-1.compute.amazonaws.com:3389"
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
