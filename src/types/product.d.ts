export type ProductType = {
  _id: string;
  name: string;
  price: number;
  amount: number;
  description: string;
  category: string[];
  picture: string;
};

export type CategoryType = {
  id: string;
  name: string;
};
