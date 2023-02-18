import { Route, Routes as RRDRoutes } from 'react-router-dom';

const Routes = () => {
  return (
    <RRDRoutes>
      <Route element={<>Home Page</>} path="/" />
      <Route element={<>Login Page</>} path="/signin" />
      <Route element={<>Product Lists Page</>} path="/products" />
      <Route element={<>Product Detail Page</>} path="/products/:id" />
      <Route element={<>Checkout Page</>} path="/checkout" />
      <Route element={<>Cart Page</>} path="/cart" />
      <Route element={<>History Page</>} path="/history" />
    </RRDRoutes>
  );
};

export default Routes;
