import axiosSecure from "./AxiosSecure";

export const createPaymentIntent = async (price) => {
  const { data } = await axiosSecure.post("/create-payment-intent", price);
  return data;
};
// save booking info in db
export const saveBookingInfo = async (paymentInfo) => {
  const { data } = await axiosSecure.post("/bookings", paymentInfo);
  return data;
};

// update room status after booking in db
export const updateStatus = async (id, status) => {
  const { data } = await axiosSecure.patch(`/rooms/status/${id}`, { status });
  return data;
};

// Get bookings from database
export const getBookings = async (email) => {
  const { data } = await axiosSecure.get(`/bookings?email=${email}`);
  return data;
};

// Get bookings from database for host
export const getHostBookings = async (email) => {
  const { data } = await axiosSecure.get(`/bookings/host?email=${email}`);
  return data;
};
