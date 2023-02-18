import React, { useState } from 'react';

const ProductQualtity = () => {
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

export default ProductQualtity;