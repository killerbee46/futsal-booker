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
    params:{date:query?.date, id:query?.id}
  });
};

export const getBookingsByUser = (data: any) => {
  return API({
    method: "GET",
    url: "/booking",
  });
};

export const addBooking = (data: any) => {
    return API({
      method: "POST",
      data: data,
      url: "/booking/add",
    });
  };