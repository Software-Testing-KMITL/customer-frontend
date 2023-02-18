import React, { useState } from "react";
import { ProductQualtity } from "@/sections/product";

const Product = () => {
  return (
    <div className="h-[100vh] grid place-items-center">
      <div className="container grid grid-cols-2 gap-[20px]">
        <section className="flex justify-center ">
          <div className="bg-black rounded-[20px] w-[500px] h-[500px]"></div>
        </section>
        <section>
          <h2 className="text-5xl font-bold mb-[30px]">Product Name</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
            omnis consequuntur vitae, qui voluptas quas excepturi officiis
            dignissimos praesentium? Perferendis consequatur dolorum facilis
            delectus reprehenderit! Facere dicta ea pariatur nemo.
          </p>
          <p className="text-2xl text-orange-400 font-semibold my-[20px]">
            $ 44.00
          </p>
          <ProductQualtity />
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

export default Product;
