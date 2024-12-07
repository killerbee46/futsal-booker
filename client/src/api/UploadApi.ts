import API, { MediaApis } from "./Api";

export const uploadFile = (data: any) => {
    return MediaApis({
      method: "POST",
      data: data,
      url: "/upload",
    });
  };

  export const getFile = (data: any) => {
    return API({
      method: "GET",
      data: data,
      url: "/upload",
    });
  };