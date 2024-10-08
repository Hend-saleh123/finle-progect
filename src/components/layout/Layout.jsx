import React,{useState} from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import { Outlet } from 'react-router-dom'
import Shopcart from '../shopCart/Shopcart'

export default function Layout() {

  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <>
      <Navbar onCartToggle={toggleCart} />
      <Outlet />
      <Footer />
      {isCartOpen && <Shopcart onClose={toggleCart} />}
    </>
  );
}
