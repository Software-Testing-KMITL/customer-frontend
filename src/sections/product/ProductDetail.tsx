import React, { useState } from "react";
import { ProductQualtity } from "@/sections/product";
import { ProductType } from "@/types";

interface Prop {
  data: ProductType;
}

const ProductDetail: React.FC<Prop> = ({ data }) => {
  const [want, setWant] = useState(1);
  // console.log("want on page =", want);

  return (
    <div className="h-[100vh] grid place-items-center">
      <div className="container grid grid-cols-2 gap-[20px]">
        <section className="flex justify-center ">
          <div className="bg-black rounded-[20px] w-[500px] h-[500px]"></div>
        </section>
        <section>
          <h2 className="text-5xl font-bold mb-[30px]">{data.name}</h2>
          <p className="pr-[25%]">{data.description}</p>
          <h3 className="text-2xl text-orange-400 font-semibold my-[20px]">
            $ {data.price}
          </h3>
          <ProductQualtity remain={data.amount} setWant={setWant} />
          <div className="flex gap-[30px]">
            <button className="bg-orange-100 rounded-[7px] text-xl p-[12px] border-[2px] border-orange-400 text-orange-400">
              Add to cart
            </button>
            <button className="bg-orange-400 rounded-[7px] text-xl p-[12px] text-white">
              Buy now
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetail;
