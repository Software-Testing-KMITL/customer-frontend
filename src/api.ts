import axios from "axios";
import { Dispatch, SetStateAction } from "react";
const baseURL = "";

type SignResponseType = {
  accessToken: string;
};

type ProductListResponseType = {
  hasNext: boolean;
  page: number;
  totalProducts: number;
  products: Array<object>;
};

function signin(
  username: string,
  password: string,
  // callBack: Dispatch<SetStateAction<string>>
  callBack: (code: string, response: SignResponseType | null) => void
) {
  axios
    .post(baseURL + "/auth/login", {
      username,
      password,
    })
    .then((response) => {
      console.log(response.data.status.code);
      callBack(response.data.status.code, response.data.accessToken);
    })
    .catch((e) => {
      console.log(e);
      callBack(e, null);
    });
}

// function findNews(q, callBack) {
//   axios.get(baseURL + `&q=${q}`).then((response) => {
//     console.log(response.data.results);
//     callBack(response.data.results);
//   }).catch;
// }

function getProductList(
  page: number,
  perPage: number,
  search: string,
  category: string,
  callBack: (code: string, response: ProductListResponseType | null) => void
) {
  let params = {
    page,
    perPage,
    search,
    category,
  };

  axios
    .get(baseURL + "/products", { params })
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

function getProductById() {}

export { signin, getProductList, getProductById };
