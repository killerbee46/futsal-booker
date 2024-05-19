import API from "./Api";

export const getFutsal = (data: any) => {
    return API({
      method: "GET",
      url: "/futsal",
    });
  };

export const createFutsal = (data: any) => {
    return API({
      method: "POST",
      data: data,
      url: "/futsal/create",
    });
  };