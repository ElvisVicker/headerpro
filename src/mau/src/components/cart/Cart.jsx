

import { useState, useContext } from "react";
import { AppContext } from "../../AppContext";
import './Cart.css';
export default function Cart() {

  const { cart,qty,changeQty,removeItem } = useContext(AppContext)

  

  return (
    <div>
      <h2>Cart</h2>
      <div>
        <h3>Items: </h3>



        {cart.map((pro, key) => {
          return (
            <div key={key} className="perCart">
              {pro.productname} quantity: {pro.qty} 
              <button className="dau" onClick={()=> changeQty(pro.id, -1) } >-</button> 


                <button className="dau" onClick={()=> changeQty(pro.id, 1)}>+</button>
                <button className="dau" onClick={()=>removeItem(pro.id)}>Remove</button>

            </div>
          )
        })}


        <h3>Total: </h3>
      </div>
    </div>
  );
}

