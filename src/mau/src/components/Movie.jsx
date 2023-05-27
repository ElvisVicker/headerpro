import { useContext } from "react";
import { AppContext } from "../AppContext";
import './products/Products.css'
import { Link, Routes, Route } from "react-router-dom"
export default function Movie() {
    const { show, count } = useContext(AppContext)
    // console.log(count)

  
    


    return (
        <div>
            <h1 className="header">LUXURY WATCH</h1>
            <Link to="/">Home</Link>
            <Link to="/products">Product</Link>
            <Link to="/cart">Cart</Link>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
    )
}

