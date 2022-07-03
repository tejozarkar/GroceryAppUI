import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button, message, Tag } from "antd";
import React, { useState } from "react";
import { addToCart, getCartCout, setCartCount } from "../../services/CartService";
import "./../../styles/Item.scss";

const Item = ({ item }) => {
   const [loading, setLoading] = useState(false);
   const onAddToCart = () => {
      setLoading(true);
      addToCart({ itemId: item.id }).then((resp) => {
         message.success("Added to cart");
         setLoading(false);
         setCartCount(getCartCout() + 1);
      });
   };

   return (
      <div className="item-wrap">
         <p className="item-name">{item.name}</p>
         <p className="item-mrp">₹{item.mrp}</p>
         <p className="item-discount-price">₹{item.discountedSellingPrice}</p>
         <p className="item-weight">
            <Tag color="blue">Weight: {item.weightInGms}gms</Tag>
         </p>
         <p className="item-discount-percent">{item.discountPercent}% off</p>
         <Button icon={<ShoppingCartOutlined />} size="middle" onClick={onAddToCart} loading={loading}>
            Add to cart
         </Button>
      </div>
   );
};

export default Item;
