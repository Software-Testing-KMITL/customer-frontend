import React, { useEffect, useState } from "react";
import { ProductType } from "@/types";
import { AuthGuard } from "@/components/auth";
import { getProductById } from "@/api";
import { useParams } from "react-router-dom";
import ProductDetail from "@/sections/product/ProductDetail";

const Product = () => {
  let temp: ProductType = {
    _id: "",
    name: "Product Name",
    price: 44.99,
    amount: 9,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque omnis consequuntur vitae, qui voluptas quas excepturi officiis dignissimos praesentium? Perferendis consequatur dolorum facilis delectus reprehenderit! Facere dicta ea pariatur nemo.",
    category: ["tops"],
    picture: "",
  };

  const handleData = (res: any) => {
    console.log(res);
  };
  const params = useParams();
  // console.log(params);

  useEffect(() => {
    try {
      getProductById({ productId: params.id || "" }, handleData);
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <AuthGuard>
      <ProductDetail data={temp} />
    </AuthGuard>
  );
};

export default Product;
