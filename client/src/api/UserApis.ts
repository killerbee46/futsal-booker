import API from "./Api";

export const getUsers = (data: any) => {
  return API({
    method: "GET",
    url: "/user",
  });
};

export const getUser = (data: any) => { 
  return API({
    method: "GET",
    url: `/user/${data?.queryKey[1]}`,
  });
};

export const createUser = (data: any) => {
  return API({
    method: "POST",
    data: data,
    url: "/user/create",
  });
};

export const updateUser = (data: any) => {
  return API({
    method: "PUT",
    data: data,
    url: `/user/update/${data?.id}`,
  });
};

export const deleteUser = (data: any) => {
  return API({
    method: "POST",
    data: data,
    url: `/user/delete/${data}`,
  });
};