import { Tag } from "antd";
import React from "react";
import "./../../styles/Cart.scss";

const CartItem = ({ item }) => {
   return (
      <div className="cart-item">
         <div className="item-wrap">
            <p className="item-name">{item.name}</p>
            <p className="item-mrp">₹{item.mrp}</p>
            <p className="item-discount-price">₹{item.discountedSellingPrice}</p>
            <p className="item-weight">
               <Tag color="blue">Weight: {item.weightInGms}gms</Tag>
            </p>
            <p className="item-discount-percent">{item.discountPercent}% off</p>
         </div>
      </div>
   );
};

export default CartItem;
