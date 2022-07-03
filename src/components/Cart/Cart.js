import React, { useEffect, useState } from "react";
import { getCartItems } from "../../services/CartService";
import Store from "./Store";
import "./../../styles/Cart.scss";
import CartItem from "./CartItem";
import { Col, Divider, Row } from "antd";
import Checkout from "./Checkout";

let cartByStore = {};
const Cart = () => {
   const [keys, setKeys] = useState([]);
   const [total, setTotal] = useState(0);
   useEffect(() => {
      getCartItems().then((items) => {
         items.forEach((item) => {
            setTotal(total + item.item.mrp);
            cartByStore[item.store.id] ? cartByStore[item.store.id].push(item) : (cartByStore[item.store.id] = [item]);
         });
         setKeys(Object.keys(cartByStore));
      });
   }, []);
   return (
      <div className="cart-wrap">
         <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={16}>
               <div className="details-wrap">
                  {keys &&
                     Object.keys(cartByStore).map((key) => (
                        <div>
                           <Store store={cartByStore[key][0].store} />
                           {cartByStore[key].map((data) => (
                              <CartItem item={data.item} />
                           ))}
                           <Divider />
                        </div>
                     ))}
               </div>
            </Col>
            <Col className="gutter-row" span={8}>
               <Checkout total={total} />
            </Col>
         </Row>
      </div>
   );
};

export default Cart;
