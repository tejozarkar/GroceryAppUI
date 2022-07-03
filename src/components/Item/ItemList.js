import { Col, message, Pagination, Row } from "antd";
import React, { useEffect, useState } from "react";
import { getItems } from "../../services/ItemService";
import Item from "./Item";
import "./../../styles/ItemList.scss";
import Search from "antd/lib/input/Search";

const ItemList = () => {
   const [data, setData] = useState();
   const [search, setSearch] = useState("");
   const [currentPageSize, setCurrentPageSize] = useState(10);

   useEffect(() => {
      getItems(1, currentPageSize, "")
         .then((data) => {
            setData(data);
         })
         .catch((err) => message.error("Something went wrong!"));
   }, []);

   const onPaginationChange = (current, pageSize) => {
      setCurrentPageSize(pageSize);
      getItems(current, pageSize, search)
         .then((data) => {
            setData(data);
         })
         .catch((err) => message.error("Something went wrong!"));
   };

   const onSearch = (query) => {
      setSearch(query);
      getItems(1, currentPageSize, query)
         .then((data) => {
            setData(data);
         })
         .catch((err) => message.error("Something went wrong!"));
   };
   return (
      <div className="item-list">
         <div className="search-box">
            <Search placeholder="Enter item name" onSearch={onSearch} enterButton />
         </div>
         <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            {data &&
               data.items.map((item) => (
                  <Col className="gutter-row" span={6}>
                     <Item item={item} />
                  </Col>
               ))}
         </Row>
         {data && (
            <div className="pagination-wrap">
               <Pagination showSizeChanger onChange={onPaginationChange} defaultCurrent={1} total={data.totalPages * data.size} />
            </div>
         )}
      </div>
   );
};

export default ItemList;
