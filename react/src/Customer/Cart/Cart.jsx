import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Checkbox } from "@mui/material";
import { getCart } from "../../Redux/Customers/Cart/Action";
import { setSelectedCartItems } from "../../Redux/Customers/Order/Action";
import CartItem from "./CartItem";

const Cart = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const jwt = localStorage.getItem("jwt");
    console.log('cls-linh-jwt',jwt);
    
    const { cart } = useSelector(store => store.cart);
    const [selectedItems, setSelectedItems] = useState([]);

    console.log("Cart in component: ", cart);

    // Lấy danh sách giỏ hàng khi component được mount
    useEffect(() => {
        dispatch(getCart(jwt));
        if(!jwt){
            navigate('/')
        }
    }, [jwt, dispatch]);

    // Xử lý thay đổi checkbox
    const handleCheckboxChange = (itemId) => {
        setSelectedItems((prev) =>
            prev.includes(itemId)
                ? prev.filter((id) => id !== itemId) // Bỏ chọn
                : [...prev, itemId] // Chọn
        );
    };

    // Xử lý khi bấm nút Checkout
    const handleCheckout = () => {
        const itemsToCheckout = cart.filter((item) => selectedItems.includes(item.id));
        console.log("Selected items for checkout:", itemsToCheckout);

        // Cập nhật Redux với danh sách đã chọn
        dispatch(setSelectedCartItems(itemsToCheckout));

        // Điều hướng sang bước tiếp theo
        navigate("/checkout?step=2");
    };

    return (
        <div className="">
            {cart?.length > 0 ? (
                <div className="lg:grid grid-cols-3 lg:px-16 relative">
                    <div className="lg:col-span-2 lg:px-5 bg-white">
                        <div className="space-y-3">
                            {cart.map((item) => (
                                <div key={item.id} className="flex items-center space-x-4">
                                    <div className="shrink-0">
                                        <Checkbox
                                            checked={selectedItems.includes(item.id)}
                                            onChange={() => handleCheckboxChange(item.id)}
                                        />
                                    </div>
                                    <div className="flex-grow">
                                        <CartItem item={item} showButton={true} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
                        <div className="border p-5 bg-white shadow-lg rounded-md">
                            <p className="font-bold opacity-60 pb-4">PRICE DETAILS</p>
                            <hr />
                            <div className="space-y-3 font-semibold">
                                <div className="flex justify-between">
                                    <span>Delivery Charges</span>
                                    <span className="text-green-700">Free</span>
                                </div>
                                <hr />
                            </div>

                            <Button
                                onClick={handleCheckout}
                                variant="contained"
                                type="submit"
                                sx={{ padding: ".8rem 2rem", marginTop: "2rem", width: "100%" }}
                                disabled={selectedItems.length === 0}
                            >
                                Check Out
                            </Button>
                        </div>
                    </div>
                </div>
            ):<div className="flex w-full justify-center">Không có sản phẩm nào trong giỏ hàng</div>}
        </div>
    );
};

export default Cart;
