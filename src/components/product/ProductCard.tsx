import { ProductType } from '@/types';
import { Link } from 'react-router-dom';
import ProductBadge from './ProductBadge';

interface ProductCardProps {
  product: ProductType;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link
      to={`/products/${product._id}`}
      className="block w-72 rounded-xl shadow-lg"
    >
      <img
        src={product.picture}
        alt="product image"
        className="w-72 h-60 object-cover object-top rounded-t-xl"
      />

      <div className="p-4 w-full">
        <h1 className="font-bold text-lg capitalize">{product.name}</h1>
        <p className="pb-2">{product.description}</p>

        <div className="flex justify-between">
          <span className="font-semibold">{product.price} ฿</span>

          <div className="flex gap-2">
            {product.category.map((category) => (
              <ProductBadge key={category} category={category} />
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
