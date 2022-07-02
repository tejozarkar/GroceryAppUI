import { message, Pagination } from "antd";
import React, { useEffect, useState } from "react";
import { getItems } from "../../services/ItemService";
import Item from "./Item";

const ItemList = () => {
   const [data, setData] = useState();
   const onPaginationChange = (current, pageSize) => {
      getItems(current, pageSize)
         .then((data) => {
            setData(data);
         })
         .catch((err) => message.error("Something went wrong!"));
   };
   useEffect(() => {
      getItems(1, 10)
         .then((data) => {
            setData(data);
         })
         .catch((err) => message.error("Something went wrong!"));
   }, []);
   return (
      <div>
         {data && data.items.map((item) => <Item item={item} />)}
         {data && <Pagination showSizeChanger onChange={onPaginationChange} defaultCurrent={1} total={data.totalPages * data.size} />}
      </div>
   );
};

export default ItemList;
