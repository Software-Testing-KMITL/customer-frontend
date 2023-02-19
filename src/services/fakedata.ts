import { UserType, CategoryType, ProductType } from '@/types';

export const fakeUser: UserType = {
  username: 'backend',
  phoneNumber: '0000000000',
};

export const fakeCategory: CategoryType = {
  id: 'c1',
  name: 'tops',
};

export const fakeCategorys: CategoryType[] = [
  {
    id: 'c1',
    name: 'tops',
  },
  {
    id: 'c2',
    name: 'bottoms',
  },
  {
    id: 'c3',
    name: 'accessories',
  },
];

export const fakeProduct: ProductType = {
  _id: '1',
  name: 't-shirt',
  price: 499,
  amount: 111,
  description: 'It is a long established fact that a reader will ',
  category: ['c1'],
  picture:
    'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/427917/sub/goods_427917_sub14.jpg?w_idth=750',
};

export const fakeProducts: ProductType[] = [
  {
    _id: '1',
    name: 't-shirt',
    price: 499,
    amount: 111,
    description: 'It is a long established fact that a reader will ',
    category: ['c1', 'shirt'],
    picture:
      'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/427917/sub/goods_427917_sub14.jpg?w_idth=750',
  },
  {
    _id: '2',
    name: 'polo',
    price: 199,
    amount: 44,
    description: 'It is a long established fact that a reader will ',
    category: ['c1'],
    picture:
      'https://image.uniqlo.com/UQ/ST3/th/imagesgoods/448767/item/thgoods_00_448767.jpg?w_idth=750',
  },
  {
    _id: '3',
    name: 'pants',
    price: 1499,
    amount: 4,
    description: 'It is a long established fact that a reader will ',
    category: ['c2'],
    picture:
      'https://www.helikon-tex.com/media/catalog/product/cache/4/image/9df78eab33525d08d6e5fb8d27136e95/s/p/sp-pgm-dc-11.jpg',
  },
  {
    _id: '4',
    name: 'jean',
    price: 1780,
    amount: 10,
    description: 'It is a long established fact that a reader will ',
    category: ['c2'],
    picture:
      'https://storage.sg.content-cdn.io/cdn-cgi/image/w_idth=542,height=723,quality=75,format=auto,fit=cover,g=top/in-resources/ac24b586-ca24-4d4f-96ee-f96d701a7ed8/Images/ProductImages/Source/levis-mens-501-54-jeans-A46770006_14_Details.jpg',
  },
  {
    _id: '5',
    name: 'hat',
    price: 10000,
    amount: 2,
    description: 'It is a long established fact that a reader will ',
    category: ['c3'],
    picture:
      'https://cdn.shopify.com/s/files/1/0490/9324/7140/products/32336_2RM399CafeTaupe_1024x.jpg?v=1663554899',
  },
];
