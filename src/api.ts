import axios from "./utils/axios";
import { Dispatch, SetStateAction } from "react";

type SignInResquestType = {
  username: string;
  password: string;
};
type SignInResponseType = {
  username: string;
  phoneNumber: string;
};

type ProductListRequestType = {
  page: number;
  perPage: number;
  search: string;
  category: string;
};
type ProductListResponseType = {
  hasNext: boolean;
  page: number;
  totalProducts: number;
  products: Array<object>;
};

type ProductDetailRequestType = {
  productId: string;
};
type ProductDetailResponseType = {
  productId: string;
  productName: string;
  category: string;
  price: number;
  productDetail: string;
  productAmount: number;
};

type GetCartItemsRequestType = {};
type GetCartItemsResponseType = {};

// * Authentication
// Sign in.
const signin = async (
  body: SignInResquestType,
  callBack: (response: SignInResponseType) => void
): Promise<void> => {
  try {
    const response = await axios.post("/auth/login", body);
    const { status, profile, accessToken } = response.data;
    // Set auth access token.
    localStorage.setItem("accessToken", accessToken);
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

    const extractedResponse: SignInResponseType = {
      username: profile.username,
      phoneNumber: profile.phoneNumber,
    };
    callBack(extractedResponse);
  } catch (e) {
    console.log("api signin error : " + e);
    throw "api signin error : " + e;
  }
};
// TODO: Refresh token

// * Products
// Get product list.
const getProductList = async (
  body: ProductListRequestType
  // callBack: (code: string, response: ProductListResponseType | null) => void
): Promise<ProductListResponseType | null> => {
  try {
    const response = await axios.get("/products", {
      params: JSON.stringify(body),
    });

    const { hasNext, page, totalProducts, products, status } = response.data;
    const extractedResponse: ProductListResponseType = {
      hasNext,
      page,
      totalProducts,
      products,
    };
    // callBack(status.code, extractedResponse);
    return extractedResponse;
  } catch (e) {
    // TODO handle error
    return null;
    // callBack(e, null);
  }
};

// Get Product detail.
const getProductById = async (
  body: ProductDetailRequestType
): Promise<ProductDetailResponseType | null> => {
  try {
    const response = await axios.get("/product" + body.productId);
    const { status, data } = response.data;
    const {
      productId,
      productName,
      category,
      price,
      productDetail,
      productAmount,
    } = data.product;

    const extractedResponse: ProductDetailResponseType = {
      productId,
      productName,
      category,
      price,
      productDetail,
      productAmount,
    };
    return extractedResponse;
  } catch (e) {
    return null;
  }
};

// * Cart
// const getCartItems = async (): Promise<GetCartItemsResponseType | null> => {
//   try {
//   } catch (e) {}
// };
const addCartItem = async () => {};
const updateCartItem = async () => {};
const checkoutCart = async () => {};
const deleteCartItem = async () => {};

// * Profile
const getUserProfile = async () => {};
const editUserProfile = async () => {};

export {
  signin,
  getProductList,
  getProductById,
  // checkoutCart,
  // getCartItems,
  // addCartItem,
  // updateCartItem,
  // deleteCartItem,
  // getUserProfile,
  // editUserProfile,
};
