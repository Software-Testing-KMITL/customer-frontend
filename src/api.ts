import axios from "axios";
import { Dispatch, SetStateAction } from "react";
const baseURL = "https://api-customer.witchayut.com";

type SignInResquestType = {
  username: string;
  password: string;
};
type SignInResponseType = {
  accessToken: string;
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

type ProductDetailResponseType = {
  productId: string;
  productName: string;
  category: string;
  price: number;
  productDetail: string;
  productAmount: number;
};

// * Authentication
// Sign in.
function signin(
  body: SignInResquestType,
  // callBack: Dispatch<SetStateAction<string>>
  callBack: (code: string, response: SignInResponseType | null) => void
) {
  axios
    .post(baseURL + "/auth/login", {
      username: body.username,
      password: body.password,
    })
    .then((response) => {
      const { status, profile, accessToken } = response.data;
      const extractedResponse: SignInResponseType = {
        accessToken,
        username: profile.username,
        phoneNumber: profile.phoneNumber,
      };
      console.log(status.code);
      callBack(status.code, extractedResponse);
    })
    .catch((e) => {
      console.log(e);
      callBack(e, null);
    });
}

// TODO: Refresh token

// * Products
// Get product list.
function getProductList(
  params: ProductListRequestType,
  callBack: (code: string, response: ProductListResponseType | null) => void
) {
  axios
    .get(baseURL + "/products", { params: JSON.stringify(params) })
    .then((response) => {
      const { hasNext, page, totalProducts, products, status } = response.data;

      const extractedResponse: ProductListResponseType = {
        hasNext,
        page,
        totalProducts,
        products,
      };
      callBack(status.code, extractedResponse);
    })
    .catch((e) => {
      // TODO handle error
      callBack(e, null);
    });
}

// Get Product detail.
function getProductById(
  token: string,
  productId: string,
  callBack: (code: string, response: ProductDetailResponseType | null) => void
) {
  axios
    .get(baseURL + "/product" + productId, {
      headers: {
        token,
      },
    })
    .then((response) => {
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
      callBack(status.code, extractedResponse);
    });
}

// * Cart
function checkoutCart() {}
function getCartItems() {}
function addCartItem() {}
function updateCartItem() {}
function deleteCartItem() {}

// * Profile
function getUserProfile() {}
function editUserProfile() {}

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
