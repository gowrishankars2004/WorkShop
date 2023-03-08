import React, { useState } from 'react';
import axios from 'axios';
import './form.css';


function Orderform()  {
  const [state, setState] = useState({});
  
  const handleChange = (event) => {
    setState({...state, [event.target.name]: event.target.value} );
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    const orderData = {
      userId: state.userId,
      productName: state.productName,
      quantity: state.quantity,
      price: state.price,
      orderDate: state.orderDate,
      expectedDeliveryDate: state.expectedDeliveryDate,
      address: state.address,
      paymentStatus: state.paymentStatus
    };
   
    window.location.reload();
    console.log(orderData);
    await axios.post('http://localhost:8080/', orderData)

    window.location.reload();
       
  };
  

  


  return (
    <form onSubmit={handleSubmit}>
      <h2>Grocery Delivery</h2>
      <input
        placeholder='userId'
        type="text"
        name="userId"
        onChange={handleChange}
      />
      <input
        placeholder='productName'
        type="text"
        name="productName"
        onChange={handleChange}
      />
      <input
        placeholder='quantity'
        type="text"
        name="quantity"
        onChange={handleChange}
      />
      <input
        placeholder='price'
        type="text"
        name="price"
        onChange={handleChange}
      />
      <input
        placeholder='orderDate'
        type="text"
        name="orderDate"
        onChange={handleChange}
      />
      <input
        placeholder='expectedDeliveryDate'
        type="text"
        name="expectedDeliveryDate"
        onChange={handleChange}
      />
      <input
        placeholder='address'
        type="text"
        name="address"
        onChange={handleChange}
      />
      <input
        placeholder='paymentStatus'
        type="text"
        name="paymentStatus"
        onChange={handleChange}
      />
      <button
      >add</button>
    </form>
  );
};

export default Orderform;
