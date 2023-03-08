import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import './table.css';

export default function Table1() {
  const [data, setData] = useState([]);

  function init() {
    axios.get("http://localhost:8080/").then(
      (response) => {
        setData(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }


  const deletedata = (userId, e) => {
    axios.delete(`http://127.0.0.1:8080/${userId}`).then(
      (response) => {
        console.log(response);
        const newData = data.filter((item) => item.userId !== userId);
        setData(newData);
      },
      (error) => {
        console.log(error);
      }
    );
  };
  const updateData = async (userId,e) => {
    data["productName"] = prompt("Enter new productName");
    data["quantity"] = prompt("Enter new quantity");
    data["price"] = parseInt(prompt("Enter new price"));
    data["orderDate"] = prompt("Enter new orderDate");
    data["expectedDeliveryDate"] = prompt("Enter new expectedDeliveryDate");
    data["address"] = prompt("Enter new address");
    data["paymentStatus"] = prompt("Enter new paymentStatus");

     await axios.put(`http://localhost:8080/updateData/` + userId, data);
      window.location.reload();
  }

  useEffect(() => {
    init();
    }, 
  []);

  return (
    <table border={1}>
      <thead>
        <tr>
          <th>userId</th>
          <th>productName</th>
          <th>quantity</th>
          <th>price</th>
          <th>orderDate</th>
          <th>expectedDeliveryDate</th>
          <th>address</th>
          <th>paymentStatus</th>
          <th>action</th>
          <th>update</th>
        </tr>
      </thead>
      <tbody>
        {data.map((grocery) => (
          <tr key={grocery.userId}>
            <td>{grocery.userId}</td>
            <td>{grocery.productName}</td>
            <td>{grocery.quantity}</td>
            <td>{grocery.price}</td>
            <td>{grocery.orderDate}</td>
            <td>{grocery.expectedDeliveryDate}</td>
            <td>{grocery.address}</td>
            <td>{grocery.paymentStatus}</td>
            <td>
              <button
                onClick={(e) => deletedata(grocery.userId, e)}
              >
                Delete
              </button>
            </td>
            <td>
            <button className="btn btn-secondary"
            onClick={(e) => updateData(grocery.userId,e)}>
            Update
          </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
