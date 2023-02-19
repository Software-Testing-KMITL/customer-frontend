import axios from "@/utils/axios";
import { AxiosError } from "axios";

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

export { getProductList, getProductById };
