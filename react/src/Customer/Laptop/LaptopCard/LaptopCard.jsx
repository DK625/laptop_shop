import React from 'react';
import "./LaptopCard.css";
import {useNavigate} from "react-router-dom";
import {API_BASE_URL} from "../../../Config/api";

const LaptopCard = ({laptop}) => {
    // const {imageUrls, price, discountPercent, model} = laptop;
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/laptop/${laptop?.id || laptop?._id || 2}`)
    }

    return (
        <div onClick={handleNavigate} className='laptopCard w-[15rem] border m-3 transition-all cursor-pointer '>
            <div className="h-[13rem] w-[10rem]">
                <img
                    className="object-cover object-top w-full h-full"
                    src={`${API_BASE_URL}${laptop.imageUrls[0]}`}
                    alt={laptop?.model}
                />
            </div>
            <div className="p-4 ">
                <div className="flex items-center space-x-2">
                    <p className="text-sm text-gray-500 line-through">{laptop?.originalPrice} VND</p>
                    <span className="text-gray-500 font-bold">-{laptop?.discountPercent}%</span>
                </div>
                <p className="text-black-500 font-bold">
                    {laptop?.discountedPrice} VND
                </p>
                <h4 className="text-lg font-medium text-gray-900">
                    {laptop?.model}
                </h4>
            </div>
        </div>
    );
};

export default LaptopCard;
