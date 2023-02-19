import {
  AddCartItemRequestType,
  AddCartItemResponseType,
  GetCartItemsResponseType,
  ProductDetailResponseType,
} from "@/types";
import axios from "@/utils/axios";
import { AxiosError } from "axios";

// TODO: do a template
const getCartItems = async (
  callBack: (response: GetCartItemsResponseType) => void
): Promise<void> => {
  try {
    const response = await axios.get("/cart");
    const { cart } = response.data;
    const arrayOfCartItems = [];

    for (var item of cart) {
      const { _id, name, category, price, amount, description, picture } = item;
      let itemDetail: ProductDetailResponseType = {
        productId: _id,
        name,
        category,
        price,
        amount,
        description,
        picture,
      };
      arrayOfCartItems.push(itemDetail);
    }

    const extractedResponse: GetCartItemsResponseType = {
      cart: arrayOfCartItems,
    };
    callBack(extractedResponse);
  } catch (e) {
    if (e instanceof AxiosError) {
      const error = e.response?.data.message;
      throw Error(error);
    }
  }
};

const addCartItem = async (
  body: AddCartItemRequestType,
  callBack: (response: AddCartItemResponseType) => void
): Promise<void> => {
  try {
    const response = await axios.post("/cart", {
      product: body,
    });
    const { cart } = response.data;
    const arrayOfCartItems = [];

    for (var item of cart) {
      const { _id, name, category, price, amount, description, picture } = item;
      let itemDetail: ProductDetailResponseType = {
        productId: _id,
        name,
        category,
        price,
        amount,
        description,
        picture,
      };
      arrayOfCartItems.push(itemDetail);
    }

    const extractedResponse: AddCartItemResponseType = {
      cart: arrayOfCartItems,
    };
    callBack(extractedResponse);
  } catch (e) {
    if (e instanceof AxiosError) {
      const error = e.response?.data.message;
      throw Error(error);
    }
  }
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
