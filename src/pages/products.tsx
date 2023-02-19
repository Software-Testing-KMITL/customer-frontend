import { ProductCard } from '@/components/product';
import { fakeProducts } from '../services/fakedata';

// const Container = styled.div`
//   padding: 20px;
//   display: flex;
//   flex-wrap: wrap;
// `;

const Products = () => {
  return (
    <div>
      {fakeProducts.map((item, index) => (
        <ProductCard key={index} />
      ))}
    </div>
  );
};

export default Products;
