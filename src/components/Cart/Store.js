import React from "react";
import "./../../styles/Cart.scss";

const Store = ({ store }) => {
   return (
      <div className="store-wrap">
         <h3>{store.name}</h3>
         <p>{store.area}</p>
         <p>Pincode: {store.pincode}</p>
      </div>
   );
};

export default Store;
