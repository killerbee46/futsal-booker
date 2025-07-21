import API from "./Api";

export const getFutsals = (data: any) => {
  return API({
    method: "GET",
    url: "/futsal",
    params:data?.queryKey[1]
  });
};

export const getFutsal = (data: any) => { 
  return API({
    method: "GET",
    url: `/futsal/${data?.queryKey[1]}`,
  });
};

export const getFutsalsByOwner = (data: any) => {
  return API({
    method: "GET",
    url: `/futsal/owner`,
    params:data?.queryKey[1]
  });
};

export const getPopularFutsals = (data: any) => {
  return API({
    method: "GET",
    url: "/futsal/popular",
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

export const deleteFutsal = (data: any) => {
  return API({
    method: "POST",
    data: data,
    url: `/futsal/delete/${data}`,
  });
};