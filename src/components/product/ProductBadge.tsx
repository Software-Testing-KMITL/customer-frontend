import React from 'react';

type ProductBadgeProps = {
  category: string;
};

const ProductBadge = ({ category }: ProductBadgeProps) => {
  return (
    <span className="px-4 py-0.5 bg-orange-500 text-white rounded-full">
      {category}
    </span>
  );
};

export default ProductBadge;
