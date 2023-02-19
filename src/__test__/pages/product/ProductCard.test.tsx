import { ProductCard } from '@/components/product';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe('Product Card', () => {
  const mockProduct = {
    _id: '1',
    name: 't-shirt',
    price: 499,
    amount: 111,
    description: 'It is a long established fact that a reader will',
    category: ['c1'],
    picture:
      'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/427917/sub/goods_427917_sub14.jpg?w_idth=750',
  };

  test('should render correctly', () => {
    // render(<ProductCard product={mockProduct} />);
    const { getByText } = render(
      <MemoryRouter>
        <ProductCard product={mockProduct} />
      </MemoryRouter>
    );

    const ProductName = getByText(mockProduct.name);
    expect(ProductName).toBeDefined();

    const ProductPrice = getByText(`${mockProduct.price} ฿`);
    expect(ProductPrice).toBeDefined();

    const ProductDescription = getByText(mockProduct.description);
    expect(ProductDescription).toBeDefined();
  });

  // test('should route to product detail page when click on product card', () => {c
  //   const { getByRole } = render(
  //     <MemoryRouter>
  //       <ProductCard product={mockProduct} />
  //     </MemoryRouter>
  //   );

  // const link = screen.getByRole('link');
  // expect(link).toHaveAttribute('href', `/products/${mockProduct._id}`);
  // screen.getBy
  // expect(link).tohave('href', `/products/1`);
  // });
});
