import { lazy, Suspense } from 'react';
import { Route, Routes as RRDRoutes } from 'react-router-dom';

const Home = lazy(() => import('@/pages/home'));
const Product = lazy(() => import('@/pages/product'));
const Products = lazy(() => import('@/pages/products'));
const Signin = lazy(() => import('@/pages/signin'));

const Routes = () => {
  return (
    <Suspense fallback={<>Loadingl...</>}>
      <RRDRoutes>
        <Route element={<Home />} path="/" />
        <Route element={<Signin />} path="/signin" />
        <Route element={<Products />} path="/products" />
        <Route element={<Product />} path="/products/:id" />
        <Route element={<>Checkout Page</>} path="/checkout" />
        <Route element={<>Cart Page</>} path="/cart" />
        <Route element={<>History Page</>} path="/history" />
      </RRDRoutes>
    </Suspense>
  );
};

export default Routes;
