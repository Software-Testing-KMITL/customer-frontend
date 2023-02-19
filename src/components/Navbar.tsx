import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const { pathname } = useLocation();

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
        <NavLink to="/">Messages</NavLink>
        <NavLink to="/">Messages</NavLink>
      </div>

      {/* <img
        src="https://icon-library.com/images/snorlax-icon/snorlax-icon-6.jpg"
        alt="user icon"
        className="w-12 h-12 rounded-full"
      /> */}
      <NavLink to="/">Logout</NavLink>
    </nav>
  );
};

export default Navbar;
