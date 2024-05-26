import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

import TableOrderBody from "./TableOrderBody";

function Orderstatus() {
  const [order, setOrder] = useState([]);
  const getOrder = async () => {
    try {
      const order = await axios.get('http://localhost:5000/orderstatus');
       const apidata = order.data
       setOrder(apidata);
      console.log(order)
    } catch (err) {
    console.log(err);
    }
  };
  useEffect(() => {
    getOrder();
  }, []);
  return (
    <>
    <div className=" col-12 ">
      <h4 className="text-primary">List of Orders</h4>
      
      <table className="table table-group-divider table-hover table-sm ">
        <thead>
          <tr>
            <th>Name</th>
            <th>E-mailid</th>
            <th>Address</th>
            <th>City</th>
            <th>Phone Number</th>
            {/* <th>Product</th>
            <th>Price</th> */}
          </tr>
        </thead>
        <tbody>
          {order.map((order,_id)=>{
            return ( <TableOrderBody order={order} _id={_id} />)
          })}
            {/* { order.map((tag, _id) => {
            return <TableOrderBody tag={tag} _id={_id} />;
          })}   */}
        </tbody>
      </table>
      </div>
    </>
  );
}

export default Orderstatus;
