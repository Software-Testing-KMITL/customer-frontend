import React, { useState } from "react";

type ProductQualtityType = {
  remain: number;
  setWant: (w: number) => void;
};

const ProductQualtity: React.FC<ProductQualtityType> = ({
  remain,
  setWant,
}) => {
  const [amount, setAmount] = useState(1);
  const update = (w: number) => {
    setAmount(w);
    setWant(w);
  };

  return (
    <div className="flex gap-[15px] my-[30px] items-end">
      <button
        onClick={() => {
          if (amount <= 1) {
            update(1);
          } else {
            update(amount - 1);
          }
        }}
        className="bg-gray-300 w-[30px] h-[30px] rounded-full"
      >
        -
      </button>
      <span role="counter" className="text-[20px]">
        {amount}
      </span>
      <button
        className="bg-gray-300 w-[30px] h-[30px] rounded-full"
        onClick={() => {
          if (amount >= remain) {
            update(remain);
          } else {
            update(amount + 1);
          }
        }}
      >
        +
      </button>
      <span className="text-l text-gray-400">{remain} Available</span>
    </div>
  );
};

export default ProductQualtity;
