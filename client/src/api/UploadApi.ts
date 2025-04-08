import API, { MediaApis } from "./Api";

export const uploadFile = (data: any) => {
    return MediaApis({
      method: "POST",
      data: data,
      url: "/upload",
    });
  };

  export const uploadMultiFile = (data: any) => {
    return MediaApis({
      method: "POST",
      data: data,
      url: "/upload/multi",
    });
  };

  export const getFile = (data: any) => {
    return API({
      method: "GET",
      data: data,
      url: "/upload",
    });
  };