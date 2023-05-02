import React, { useState, useEffect } from "react";
import axios from "axios";

function Order() {

    const [order, setOrder] = useState({});
    const [items, setItems] = useState([]);

    useEffect(() => {
        let id = window.sessionStorage.getItem("orderId");
        fetchData(id);
    }, []);

    const fetchData = async (id) => {
        let res = await axios.get("http://localhost:8080/" + id);
        setOrder(res.data);
        setItems(res.data.items);
        console.log(res.data);
    }

    return (
        <div className="container-fluid bg-gray-900 justify-center h-full min-h-screen p-7 max-w-screen">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-4xl text-orange-500 font-semibold">All Orders</h1>
                <div className="container-fluid bg-gray-400 justify-center p-9 m-8 w-[1400px] h-fit rounded-md">

                    <div className="container-fluid bg-gray-900 p-9 m-8 w-[1200px] h-fit rounded-md">
                        <div className="flex flex-row">
                            <h1 className="text-orange-500 mr-5">ID</h1>
                            <h3 className="text-orange-300">{order.id}</h3>
                        </div>
                        <div className="flex flex-row">
                            <h1 className="text-orange-500 mr-5">Consumer Address</h1>
                            <h3 className="text-orange-300">{order.consumerAddress}</h3>
                        </div>
                        <div className="flex flex-row">
                            <h1 className="text-orange-500 mr-5">Producer Address</h1>
                            <h3 className="text-orange-300">{order.producerAddress}</h3>
                        </div>
                        <div className="flex flex-row">
                            <h1 className="text-orange-500 mr-5">Delivery Man Address</h1>
                            <h3 className="text-orange-300">{order.deliveryManAddress}</h3>
                        </div>
                        <div className="flex flex-row">
                            <h1 className="text-orange-500 mr-5">Status</h1>
                            <h3 className="text-orange-300">{order.status}</h3>
                        </div>
                    </div>

                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Item ID
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Product ID
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Product Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Quantity
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Price
                                    </th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    items.map((item) => {
                                        return (
                                            <Item key={item.id} item={item} />
                                        )
                                    })
                                }

                            </tbody>
                        </table>
                    </div>

                </div>

            </div>
        </div>
    )
}

function Item(props) {
    const Item = props.item;
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {Item.id}
            </th>

            <td className="px-6 py-4">
                {Item.productId}
            </td>
            <td className="px-6 py-4">
                {Item.productName}
            </td>
            <td className="px-6 py-4">
                {Item.quantity}
            </td>
            <td className="px-6 py-4">
                {Item.price}
            </td>

        </tr>
    )
}

export default Order;