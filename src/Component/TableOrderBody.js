import React from "react";

function TableOrderBody({ order, _id }) {
  return (
    <>
    
    <tr key={_id}>
      <td> {order.name} </td>
      <td>{order.email}</td>
      <td>{order.address}</td>
      <td>{order.city}</td>
      <td>{order.phoneNumber}</td>
      {/* <td>{tag.status}</td>
      <td>{tag.price}</td> */}
    </tr>
    </>
  );
}

export default TableOrderBody;
