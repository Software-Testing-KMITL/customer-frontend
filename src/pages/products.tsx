import { ProductCard } from '@/components/product';
import { fakeProducts } from '../services/fakedata';

const Products = () => {
  return (
    <div className="pt-16 pb-32">
      <div className="flex flex-wrap justify-between  gap-4 container mx-auto">
        {fakeProducts.map((product, index) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
