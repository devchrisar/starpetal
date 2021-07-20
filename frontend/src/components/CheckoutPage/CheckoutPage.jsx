import React from "react";
import product from "../itemDetail";

export default function CheckoutPage() {
  return (
    <div>
      <div className="row">
        <div className="col-2">
          <img className="large" src={product.image} alt={product.name}></img>
        </div>
        <div className="col-1">
          <ul>
            <li>
              <h1>{product.name}</h1>
            </li>
          </ul>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}
