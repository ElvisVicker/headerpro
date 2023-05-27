import { createContext, useState, useContext } from "react";
import { AppContext } from "../../AppContext";
import './Products.css';
import w from './watch.jpg'
import Movie from "../Movie";


export default function Products() {
    const { products, cart,addCart  } = useContext(AppContext)
    console.log(products)

    return (
        <div className="productContainer">
         
            {products.map((pro, key) => {
                return (
                    <div key={key} className="perProduct">
                     
                        <img className="productImg" src={w} alt="" />
                        <h1 className="productName">{pro.productname}</h1>
                        <div className="productPrice">{pro.price}</div>
                        <div className="productXuatxu">{pro.xuatxu}</div>
                        <button className="btnProduct" onClick={()=> addCart(pro.id)}>BUY NOW</button>
                    </div>
                )
            })}
        </div>
    )


}