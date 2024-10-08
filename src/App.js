import React from 'react';
import Layout from './components/layout/Layout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/1-home/Home';
import Cart from './components/cart/Cart';
import Shop from  './components/2-shop/Shop';
import Contact from './components/4-contact/Contact';
import Sengelprogect from './components/singleProgect/Sengelprogect';
import Checkout from './components/chechout/Checkout';
// import Notfound from './components/notfound/Notfound';
import Shopcart from './components/shopCart/Shopcart';
import { CartProvider } from './components/contaxt/CartContext';


let routs = createBrowserRouter([{
  path:"", element:<Layout/>, children:[
    { index:true , element:<Home/>},
    {path:"cart/:id" , element:<Cart/>},
    {path:"/shop" , element:<Shop/>},
    {path:"/singleproject/:id" , element:<Sengelprogect/>},
    {path:"/contact" , element:<Contact/>},
    {path:"/checkout" , element:<Checkout/>},
  ],
},
{  path:"/shopcart" ,element:<Shopcart/>,
}

])

function App() {
  return (
    <div >
      <CartProvider>
         <RouterProvider router={routs} ></RouterProvider>
      </CartProvider>
    </div>
  );
}

export default App;



