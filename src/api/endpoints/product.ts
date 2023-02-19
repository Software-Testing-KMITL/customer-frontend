import {
  ProductDetailRequestType,
  ProductDetailResponseType,
  ProductListRequestType,
  ProductListResponseType,
} from "@/types";
import axios from "@/utils/axios";
import { AxiosError } from "axios";

const getProductList = async (
  body: ProductListRequestType | null,
  callBack: (response: ProductListResponseType) => void
): Promise<void> => {
  try {
    const response = await axios.get("/products", {
      params: body ? JSON.stringify(body) : {},
    });

    const { hasNext, page, totalProducts, products, status } = response.data;
    const extractedResponse: ProductListResponseType = {
      hasNext,
      page,
      totalProducts,
      products,
    };
    callBack(extractedResponse);
  } catch (e) {
    if (e instanceof AxiosError) {
      const error = e.response?.data.message;
      throw Error(error);
    }
  }
};

// Get Product detail.
const getProductById = async (
  body: ProductDetailRequestType,
  callBack: (response: ProductDetailResponseType) => void
): Promise<void> => {
  try {
    const response = await axios.get("/products/" + body.productId);
    const { product } = response.data;
    const { _id, name, category, price, amount, description, picture } =
      product;

    const extractedResponse: ProductDetailResponseType = {
      productId: _id,
      name,
      category,
      price,
      amount,
      description,
      picture,
    };
    callBack(extractedResponse);
  } catch (e) {
    if (e instanceof AxiosError) {
      const error = e.response?.data.message;
      throw Error(error);
    }
  }
};

export { getProductList, getProductById };
