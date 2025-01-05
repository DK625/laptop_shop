import {Box, Grid} from "@mui/material";
import React, {useEffect, useState} from "react";
import OrderCard from "./OrderCard";
import {useDispatch, useSelector} from "react-redux";
import {getOrderHistory} from "../../Redux/Customers/Order/Action";

const orderStatus = [
    {label: "PENDING", value: "PENDING"},
    {label: "PLACED", value: "PLACED"},
    {label: "CONFIRMED", value: "CONFIRMED"},
    {label: "SHIPPED", value: "SHIPPED"},
    {label: "DELIVERED", value: "DELIVERED"},
    {label: "CANCELLED", value: "CANCELLED"},
];

const Order = () => {
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt");
    const {order} = useSelector(store => store);
    const [status, setStatus] = useState('');
    
    

    useEffect(() => {
        dispatch(getOrderHistory(status));
    }, [jwt,status]);
    return (
        <Box className="px-10">
            <Grid container spacing={0} sx={{justifyContent: "space-between"}}>
                <Grid item xs={2.5} className="">
                    <div className="h-auto shadow-lg bg-white border p-5 sticky top-5">
                        <h1 className="font-bold text-lg">Filters</h1>
                        <div className="space-y-4 mt-10">
                            <h1 className="font-semibold">ORDER STATUS</h1>
                            {orderStatus.map((option, optionIdx) => (
                                <div key={option.value} className="flex items-center">
                                    <input
                                        defaultValue={option.value}
                                        type="radio"
                                        name="status"
                                        onChange={(e)=>setStatus(e.target.value)}
                                        defaultChecked={option.checked}
                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                        className="ml-3 text-sm text-gray-600"
                                    >
                                        {option.label}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                </Grid>
                <Grid item xs={9}>
                    <Box className="space-y-5 ">
                        {order.orders?.content?.length > 0 && order.orders?.content?.map((order) => {
                            return order?.orderItems?.map((item, index) => <OrderCard item={item} order={order}/>)
                        })}
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Order;
