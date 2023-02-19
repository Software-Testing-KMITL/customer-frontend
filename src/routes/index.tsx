import { LoadingScreen } from '@/components/loading';
import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes as RRDRoutes } from 'react-router-dom';

const Product = lazy(() => import('@/pages/product'));
const Products = lazy(() => import('@/pages/products'));
const Signin = lazy(() => import('@/pages/signin'));

const Routes = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <RRDRoutes>
        <Route path="/" element={<Navigate to="/products" replace />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        {/* <Route element={<>Checkout Page</>} path="/checkout" /> */}
        {/* <Route element={<>Cart Page</>} path="/cart" /> */}
        {/* <Route element={<>History Page</>} path="/history" /> */}
      </RRDRoutes>
    </Suspense>
  );
};

export default Routes;
