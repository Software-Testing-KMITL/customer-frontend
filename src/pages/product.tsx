import React, { useState } from "react";

const Qualtity = () => {
  const [amount, setAmount] = useState(1);

  return (
    <div className="flex gap-[15px] my-[30px]">
      <button
        onClick={() => {
          if (amount <= 1) {
            setAmount(1);
          } else {
            setAmount(amount - 1);
          }
        }}
        className="bg-gray-300 w-[30px] h-[30px] rounded-full"
      >
        -
      </button>
      <p className="text-[20px]">{amount}</p>
      <button
        className="bg-gray-300 w-[30px] h-[30px] rounded-full"
        onClick={() => setAmount(amount + 1)}
      >
        +
      </button>
    </div>
  );
};

const Product = () => {
  return (
    <div className="flex h-[100vh] items-center">
      <div className="grid grid-cols-2 px-[8%]">
        <div className="flex justify-center ">
          <div className="bg-black rounded-[20px] w-[500px] h-[500px]"></div>
        </div>
        <div>
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
          <Qualtity />
          <div className="flex gap-[30px]">
            <button className="bg-orange-100 rounded-[7px] text-xl p-[12px] border-[2px] border-orange-400 text-orange-400">
              Add to cart
            </button>
            <button className="bg-orange-400 rounded-[7px] text-xl p-[12px] text-white">
              Buy now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
