// Auth
export type SignInResquestType = {
  username: string;
  password: string;
};

export type SignInResponseType = {
  username: string;
  phoneNumber: string;
};

// Product
export type ProductListRequestType = {
  page?: number;
  perPage?: number;
  search?: string;
  category?: Array<string>;
};
export type ProductListResponseType = {
  hasNext: boolean;
  page: number;
  totalProducts: number;
  products: Array<object>;
};

export type ProductDetailRequestType = {
  productId: string;
};
export type ProductDetailResponseType = {
  productId: string;
  name: string;
  category: Array<string>;
  price: number;
  amount: number;
  description: string;
  picture: string;
};

// Cart
// export type GetCartItemsRequestType = {};
export type GetCartItemsResponseType = {
  cart: Array<ProductDetailResponseType>;
};

export type AddCartItemRequestType = {
  productId: string;
  amount: number;
};
export type AddCartItemResponseType = {
  cart: Array<ProductDetailResponseType>;
};

export type updateCartItemResponseType = {};
export type updateCartItemRequestType = {};

export type deleteCartItemResponseType = {};
export type deleteCartItemRequestType = {};

export type checkoutCartItemResponseType = {};
export type checkoutCartItemRequestType = {};
