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
      setProducts(response.products[0]);
      console.log(response.products[0]);
    };

    getProductList(null, handleResponse);
  }, []);

  useEffect(() => {
    console.log(products);
  }, []);

  return (
    <div className="pt-16 pb-32">
      <div className="flex flex-wrap justify-between  gap-4 container mx-auto">
        {products.map((product, index) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
