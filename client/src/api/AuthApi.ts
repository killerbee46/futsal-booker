import { AuthApi } from "./Api";

//modify User
export const requestLogin = (data: any) => {
  return AuthApi({
    method: "POST",
    data: data,
    url: "/login",
  });
};

export const requestRegister = (data: any) => {
  return AuthApi({
    method: "POST",
    data: data,
    url: "/register",
  });
};

export const storeLogin = (data:any) => {
  // console.log(data)
  // localStorage.setitem('user',JSON.stringify(data?.data?.user))
  localStorage.setItem("token",data?.data?.token);
  localStorage.setItem("loggedIn",'true');
}

export const getToken = () => {
  const token = localStorage.getItem('token') || ""
  return token
}
// const temp = 
export const requestLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("loggedIn");
  window.location.href = "/";
};
