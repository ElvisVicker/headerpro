import { AppProvider } from "./AppContext";
import Movie from "./components/Movie";
import { Link, Routes, Route } from "react-router-dom"
import Products from "./components/products/Products";
import Cart from "./components/cart/Cart";
export default function App() {
  return (


    <AppProvider>
      <Movie />
      <Routes>
        <Route path="/products" element={<Products />}></Route>       
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>




  
    </AppProvider>
  );
}

