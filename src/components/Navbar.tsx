import { NavLink, useLocation } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { useAuth } from '@/hooks/useAuth';

const Navbar = () => {
  const { pathname } = useLocation();
  const { isAuthenticated, signout } = useAuth();
  const { enqueueSnackbar } = useSnackbar();

  const handleSignout = () => {
    signout();
    enqueueSnackbar('Signout successful', { variant: 'success' });
  };

  if (pathname === '/signin') {
    return <></>;
  }

  return (
    <nav className="w-screen flex justify-between items-center px-10">
      <img
        src="https://assets.turbologo.ru/blog/ru/2021/06/03041624/nike-logo-1995.png"
        alt="uniqlo"
        className="w-20 h-20 object-cover"
      />

      <div className="flex items-center gap-8">
        <NavLink to="/products">Products</NavLink>
        {/* <NavLink to="/">Messages</NavLink> */}
        {/* <NavLink to="/">Messages</NavLink> */}
      </div>

      {/* <img
        src="https://icon-library.com/images/snorlax-icon/snorlax-icon-6.jpg"
        alt="user icon"
        className="w-12 h-12 rounded-full"
      /> */}
      {isAuthenticated ? (
        <button onClick={handleSignout}>Logout</button>
      ) : (
        <NavLink to="/signin">Sign in</NavLink>
      )}
    </nav>
  );
};

export default Navbar;
