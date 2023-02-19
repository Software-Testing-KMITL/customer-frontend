import axios from "@/utils/axios";
import { AxiosError } from "axios";

type ProductListRequestType = {
  page?: number;
  perPage?: number;
  search?: string;
  category?: Array<string>;
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

const getProductList = async (
  body: ProductListRequestType | null,
  callBack: (response: ProductListResponseType) => void
): Promise<void> => {
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
    callBack(extractedResponse);
  } catch (e) {
    if (e instanceof AxiosError) {
      const error = e.response?.data.message;
      throw Error(error);
    }
  }
};

export { getProductList, getProductById };
