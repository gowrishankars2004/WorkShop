import React, { useState } from "react";
import axios from "axios";

function PlaceOrder() {

    const [dets, setDets] = useState({});
    const [proId, setProId] = useState("");
    const [proName, setProName] = useState("");
    const [price, setPrice] = useState("");
    const [quant, setQuant] = useState("");
    const [items, setItems] = useState([]);

    const handleDets = (e) => {
        setDets({ ...dets, [e.target.name]: e.target.value });
    }

    const handleProId = (e) => {
        setProId(e.target.value);
    }

    const handleProName = (e) => {
        setProName(e.target.value);
    }

    const handlePrice = (e) => {
        setPrice(e.target.value);
    }

    const handleQuant = (e) => {
        setQuant(e.target.value);
    }

    const handleItems = (e) => {
        e.preventDefault();
        const item = { "productId": parseInt(proId), "productName": proName, "price": parseFloat(price), "quantity": parseInt(quant) };
        setItems([...items, item]);
        setProId("");
        setProName("");
        setPrice("");
        setQuant("");
    }

    const handleSubmit = () => {
        dets["items"] = items;
        console.log(dets);
        postData();
    }

    const postData = async () => {
        await axios.post("http://localhost:8080/placeOrder", dets);
        alert("Order Placed Successfully!");
    }

    return (
        <div className="container-fluid flex bg-gray-900 items-center justify-center h-screen p-5 w-screen">


            <form className="w-96">

                <div className="relative z-0 w-full mb-6 group">
                    <input onChange={handleDets} type="text" name="consumerAddress" id="conAddress" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-orange-500 dark:border-gray-600 dark:focus:border-orange-400 focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " required />
                    <label for="conAddress" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Consumer Address</label>
                </div>

                <div className="relative z-0 w-full mb-6 group">
                    <input onChange={handleDets} type="text" name="producerAddress" id="proAddress" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-orange-500 dark:border-gray-600 dark:focus:border-orange-400 focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " required />
                    <label for="proAddress" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Producer Address</label>
                </div>

                <h1 className="text-4xl text-center text-orange-500 mt-8 mb-7">ITEMS</h1>

                <div className="relative z-0 w-full mb-6 group">
                    <input onChange={handleProId} type="text" name="productId" id="proId" value={proId} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-orange-500 dark:border-gray-600 dark:focus:border-orange-400 focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " required />
                    <label for="proId" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Product ID</label>
                </div>

                <div className="relative z-0 w-full mb-6 group">
                    <input onChange={handleProName} type="text" name="productName" id="proName" value={proName} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-orange-500 dark:border-gray-600 dark:focus:border-orange-400 focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " required />
                    <label for="proName" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Product Name</label>
                </div>

                <div className="relative z-0 w-full mb-6 group">
                    <input onChange={handleQuant} type="number" name="quantity" id="quant" value={quant} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-orange-500 dark:border-gray-600 dark:focus:border-orange-400 focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " required />
                    <label for="quant" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Quantity</label>
                </div>

                <div className="relative z-0 w-full mb-6 group">
                    <input onChange={handlePrice} type="text" name="price" id="price" value={price} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-orange-500 dark:border-gray-600 dark:focus:border-orange-400 focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " required />
                    <label for="price" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price</label>
                </div>

                <div className="flex justify-center mt-[50px]">
                    <button onClick={handleItems} type="button" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 mr-2 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-gray-800">Add Item</button>
                    <button onClick={handleSubmit} type="button" className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-gray-800">Place Order</button>
                </div>

            </form>


        </div>
    );
}

export default PlaceOrder;