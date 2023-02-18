interface IProduct {
  id: string;
  name: string;
  price: number;
  amount: number;
  description: string;
  category: string;
  picture: string;
}

interface ICategory {
  id: string;
  name: string;
}

interface IUser {
  username: string;
  password: string;
  phoneNumber: string;
}

export const fakeUser: IUser = {
  username: 'backend',
  password: 'zNUhhHXwzXOzSMPSHa3lM68iip7CRtzw',
  phoneNumber: '0000000000',
};

export const fakeCategory: ICategory = {
  id: 'c1',
  name: 'tops',
};

export const fakeCategorys: ICategory[] = [
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

export const fakeProduct: IProduct = {
  id: '1',
  name: 't-shirt',
  price: 499,
  amount: 111,
  description: 'abcde;ljsdajflkkewr;lkwenkrwenn ;rjwlkjr;qjlejrm',
  category: 'c1',
  picture:
    'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/427917/sub/goods_427917_sub14.jpg?width=750',
};

export const fakeProducts: IProduct[] = [
  {
    id: '1',
    name: 't-shirt',
    price: 499,
    amount: 111,
    description: 'abcde;ljsdajflkkewr;lkwenkrwenn ;rjwlkjr;qjlejrm',
    category: 'c1',
    picture:
      'https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/427917/sub/goods_427917_sub14.jpg?width=750',
  },
  {
    id: '2',
    name: 'polo',
    price: 199,
    amount: 44,
    description: 'abcde;ljsdajflkkewr;lkwenkrwenn ;rjwlkjr;qjlejrm',
    category: 'c1',
    picture:
      'https://image.uniqlo.com/UQ/ST3/th/imagesgoods/448767/item/thgoods_00_448767.jpg?width=750',
  },
  {
    id: '3',
    name: 'pants',
    price: 1499,
    amount: 4,
    description: 'abcde;ljsdajflkkewr;lkwenkrwenn ;rjwlkjr;qjlejrm',
    category: 'c2',
    picture:
      'https://www.helikon-tex.com/media/catalog/product/cache/4/image/9df78eab33525d08d6e5fb8d27136e95/s/p/sp-pgm-dc-11.jpg',
  },
  {
    id: '4',
    name: 'jean',
    price: 1780,
    amount: 10,
    description: 'abcde;ljsdajflkkewr;lkwenkrwenn ;rjwlkjr;qjlejrm',
    category: 'c2',
    picture:
      'https://storage.sg.content-cdn.io/cdn-cgi/image/width=542,height=723,quality=75,format=auto,fit=cover,g=top/in-resources/ac24b586-ca24-4d4f-96ee-f96d701a7ed8/Images/ProductImages/Source/levis-mens-501-54-jeans-A46770006_14_Details.jpg',
  },
  {
    id: '5',
    name: 'hat',
    price: 10000,
    amount: 2,
    description: 'abcde;ljsdajflkkewr;lkwenkrwenn ;rjwlkjr;qjlejrm',
    category: 'c3',
    picture:
      'https://cdn.shopify.com/s/files/1/0490/9324/7140/products/32336_2RM399CafeTaupe_1024x.jpg?v=1663554899',
  },
];
