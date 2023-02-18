import React from 'react';
//import { useState } from 'react';
import { useQuery } from 'react-query';

//Component
import Drawer from '@mui/material/Drawer';
import { LinearProgress } from '@mui/material';
import Grid from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';
import Badge from '@mui/material';

import { Wrapper } from './products-items/item.style'

export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
}

const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch('https://fakestoreapi.com/products')).json();

const Products = () => {
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    'products',
    getProducts
  );

  const handleAddToCart = (clickedItem: CartItemType) => null;

  return <div>Products Page</div>;
};

export default Products;
