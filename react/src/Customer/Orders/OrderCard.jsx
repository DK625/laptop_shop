import { Box, Grid, Typography } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import AdjustIcon from "@mui/icons-material/Adjust";
import React from "react";
import { useNavigate } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";

const OrderCard = ({ item, order }) => {
  
  const navigate = useNavigate();
  console.log("items ", item,order,order.orderStatus);
  return (
    <Box className="p-5 shadow-lg hover:shadow-2xl border ">
      <Grid spacing={2} container sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div
            onClick={() => navigate(`/account/order/${order?.id}`)}
            className="flex cursor-pointer"
          >
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src={item?.laptop.imageUrls[0]}
              alt=""
            />
            <div className="ml-5">
              <p className="mb-2">{item?.laptop.model}</p>
              <p className="opacity-50 text-xs font-semibold space-x-5">
                <span>Size: {item?.quantity}</span>
                <span>Payment status: {order.paymentStatus}</span>
              </p>
            </div>
          </div>
        </Grid>

        <Grid item xs={2}>
          <p>{((100 - item.laptop?.discountPercent)*item.laptop?.price/100)?.toLocaleString('vi-VN')} VND</p>
        </Grid>
        <Grid item xs={4}>
          <p className="space-y-2 font-semibold">
           <div>{order?.orderStatus}</div>
          </p>
          {item.orderStatus === "DELIVERED" && (
            <div
              onClick={() => navigate(`/account/rate/{id}`)}
              className="flex items-center text-blue-600 cursor-pointer"
            >
              <StarIcon sx={{ fontSize: "2rem" }} className="px-2 text-5xl" />
              <span>Rate & Review Laptop</span>
            </div>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default OrderCard;
