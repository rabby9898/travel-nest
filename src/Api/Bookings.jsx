import axiosSecure from "./AxiosSecure";

export const createPaymentIntent = async (price) => {
  const { data } = await axiosSecure("/create-payment-intent", price);
  return data;
};
