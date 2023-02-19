import { AddCartItemRequestType } from "@/types";
import axios from "@/utils/axios";
import { AxiosError } from "axios";

// TODO: do a template
const getCartItems = async (
  callBack: (response: ResponseType) => void
): Promise<void> => {
  try {
    // const extractedResponse: ResponseType = {
    //
    // };
    // callBack(extractedResponse);
  } catch (e) {
    if (e instanceof AxiosError) {
      const error = e.response?.data.message;
      throw Error(error);
    }
  }
};

const addCartItem = async (body: AddCartItemRequestType) => {
  try {
  } catch (e) {}
};
const updateCartItem = async (): Promise<void> => {};
const deleteCartItem = async (): Promise<void> => {};
const checkoutCart = async (): Promise<void> => {};

export {
  getCartItems,
  addCartItem,
  updateCartItem,
  deleteCartItem,
  checkoutCart,
};
