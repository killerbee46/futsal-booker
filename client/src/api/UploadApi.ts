import { MediaApis } from "./Api";

export const uploadFile = (data: any) => {
    return MediaApis({
      method: "POST",
      data: data,
      url: "/upload",
    });
  };