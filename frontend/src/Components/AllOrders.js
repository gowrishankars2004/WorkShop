import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AllOrders() {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        let res = await axios.get("http://localhost:8080/");
        setOrders(res.data);
        console.log(res.data);
    }

    return (
        <div className="container-fluid bg-gray-900 justify-center h-full min-h-screen p-7 w-full min-w-screen">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-4xl text-orange-500 font-semibold">All Orders</h1>
                <div className="container-fluid bg-gray-400 justify-center p-9 m-8 w-[1400px] h-fit rounded-md">

                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Order ID
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Consumer Address
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Producer Address
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Delivery Man Address
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Order Status
                                    </th>
                                    <th scope="col" className="px-6 py-3">

                                    </th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    orders.map((order) => {
                                        return (
                                            <Order key={order.id} order={order} />
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

function Order(props) {
    const Order = props.order;
    const navigate = useNavigate();

    const handlePreview = () => {
        window.sessionStorage.setItem("orderId", Order.id);
        navigate("/preview");
    }

    const handleAccept = async () => {
        await axios.put("http://localhost:8080/accept/" + Order.id);
        window.location.reload(false);
    }

    const handleReject = async () => {
        await axios.put("http://localhost:8080/reject/" + Order.id);
        window.location.reload(false);
    }

    const handleTransfer = async () => {
        let deliveryManAddress;
        deliveryManAddress = prompt("Enter Delivery Man Address");

        while (deliveryManAddress == "") {
            alert("Please enter a valid address");
            deliveryManAddress = prompt("Enter Delivery Man Address");
        }

        await axios.put("http://localhost:8080/transfer/" + Order.id + "/" + deliveryManAddress);
        window.location.reload(false);
    }

    const handleDeliver = async () => {
        await axios.put("http://localhost:8080/deliver/" + Order.id);
        window.location.reload(false);
    }

    const handleDelete = async () => {
        await axios.delete("http://localhost:8080/" + Order.id);
        window.location.reload(false);
    }

    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {Order.id}
            </th>
            <td className="px-6 py-4">
                {Order.producerAddress}
            </td>
            <td className="px-6 py-4">
                {Order.consumerAddress}
            </td>
            <td className="px-6 py-4">
                {Order.deliveryManAddress}
            </td>
            <td className="px-6 py-4">
                {Order.status}
            </td>
            <td className="px-3 py-4 text-right flex">

                {/* Preview */}
                <button onClick={handlePreview}>
                    <svg className="h-5 w-5 text-purple-500 mt-2 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                </button>

                {/* Accept */}
                <button onClick={handleAccept}>
                    <svg className="h-5 w-5 text-green-500 mt-2 mr-3" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <path d="M7 11v 8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3" />
                    </svg>
                </button>

                {/* Reject */}
                <button onClick={handleReject}>
                    <svg className="h-5 w-5 text-yellow-500 mt-2 mr-3" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <path d="M7 13v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v7a1 1 0 0 0 1 1h3a4 4 0 0 1 4 4v 1a2 2 0 0 0 4 0v-5h3a2 2 0 0 0 2 -2l-1 -5a2 3 0 0 0 -2 -2h-7a3 3 0 0 0 -3 3" />
                    </svg>
                </button>

                {/* Transfer */}
                <button onClick={handleTransfer}>
                    <svg className="h-5 w-5 text-pink-500 mt-2 mr-3" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <circle cx="7" cy="17" r="2" />
                        <circle cx="17" cy="17" r="2" />
                        <path d="M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />
                        <line x1="3" y1="9" x2="7" y2="9" />
                    </svg>
                </button>

                {/* Deliver */}
                <button onClick={handleDeliver}>
                    <svg className="h-5 w-5 text-white mt-2 mr-3" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <polyline points="5 12 3 12 12 3 21 12 19 12" />
                        <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                        <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                    </svg>
                </button>

                {/* Delete */}
                <button onClick={handleDelete}>
                    <svg className="h-4 w-4 text-red-500 mt-2.5 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="3 6 5 6 21 6" />
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                        <line x1="10" y1="11" x2="10" y2="17" />  <line x1="14" y1="11" x2="14" y2="17" />
                    </svg>
                </button>

            </td>
        </tr>
    )
}

export default AllOrders;

