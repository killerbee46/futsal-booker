import API from "./Api";

export const getFutsals = (data: any) => {
  return API({
    method: "GET",
    url: "/futsal",
  });
};

export const getFutsal = (data: any) => { 
  return API({
    method: "GET",
    url: `/futsal/${data?.queryKey[1]}`,
  });
};

export const createFutsal = (data: any) => {
  return API({
    method: "POST",
    data: data,
    url: "/futsal/create",
  });
};

export const updateFutsal = (data: any) => {
  return API({
    method: "PUT",
    data: data,
    url: `/futsal/update/${data?.id}`,
  });
};