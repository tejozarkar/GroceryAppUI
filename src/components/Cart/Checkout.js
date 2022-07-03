import { ShoppingFilled, WalletOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import "./../../styles/Cart.scss";

const Checkout = ({ total }) => {
   return (
      <div className="checkout-wrap">
         <h3 className="total-cost">Total cost: ₹{total}</h3>
         <Button type="primary" icon={<WalletOutlined />} size={"large"}>
            Checkout
         </Button>
      </div>
   );
};

export default Checkout;
