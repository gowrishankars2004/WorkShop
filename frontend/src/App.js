import React from "react";
import AllOrders from "./Components/AllOrders";
import Order from "./Components/Order";
import PlaceOrder from "./Components/PlaceOrder";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllOrders />} />
          <Route path="/preview" element={<Order />} />
          <Route path="/placeorder" element={<PlaceOrder />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;