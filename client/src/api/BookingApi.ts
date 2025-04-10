import API from "./Api";

export const getBookings = (data: any) => {
  return API({
    method: "GET",
    url: "/booking",
  });
};

export const getBookingsByFutsal = (data: any) => {
  const query = data?.queryKey[1]
  return API({
    method: "GET",
    url: `/booking/futsal`,
    params:query
  });
};



export const getBookingsByUser = (data: any) => {
  const query = data?.queryKey[1]
  return API({
    method: "GET",
    url: "/booking/user",
    params:{booker:query?.user, status:query?.status || ""}
  });
};

export const addBooking = (data: any) => {
    return API({
      method: "POST",
      data: data,
      url: "/booking/add",
    });
  };

  export const cancelBooking = (data: any) => {
    const id = data?.id
    delete data?.id
    return API({
      method: "PUT",
      data: data,
      url: `/booking/${id}`,
    });
  };
