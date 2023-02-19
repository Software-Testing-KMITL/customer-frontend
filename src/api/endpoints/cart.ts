import axios from "@/utils/axios";
import { AxiosError } from "axios";

type GetCartItemsRequestType = {};
type GetCartItemsResponseType = {};

type AddCartItemRequestType = {};
type AddCartItemResponseType = {};

type updateCartItemResponseType = {};

const getCartItems = async (): Promise<void> => {
  try {
  } catch (e) {}
};

const addCartItem = async (body: AddCartItemRequestType) => {};
const updateCartItem = async () => {};
const deleteCartItem = async () => {};
const checkoutCart = async () => {};

export {
  getCartItems,
  addCartItem,
  updateCartItem,
  deleteCartItem,
  checkoutCart,
};
