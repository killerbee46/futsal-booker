import API from "./Api";

export const uploadFile = (data: any) => {
    return API({
      method: "POST",
      data: data,
      url: "/upload",
    });
  };