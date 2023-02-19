import { useEffect, useState } from 'react';
import { getProductList } from '@/api';
import { ProductCard } from '@/components/product';
import { ProductType } from '@/types';
import { fakeProducts } from '../services/fakedata';

const defalutConfig = {
  page: 1,
  perpage: 20,
  search: undefined,
  category: undefined,
};

const Products = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [config, setConfig] = useState();
  const [response, setResponse] = useState();

  useEffect(() => {
    const handleResponse = (response: any) => {
      console.log({ response });
      setProducts(response.products);
    };

    console.log('hello');
    getProductList(null, handleResponse);
  }, []);

  useEffect(() => {
    console.log({ products });
  }, [products]);

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
