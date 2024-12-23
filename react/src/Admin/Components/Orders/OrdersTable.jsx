import {
    Avatar,
    AvatarGroup,
    Box,
    Button,
    Card,
    CardHeader,
    Chip,
    Menu,
    MenuItem,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {
    confirmOrder,
    deleteOrder,
    deliveredOrder,
    getOrders,
    shipOrder,
} from "../../../Redux/Admin/Orders/Action";

const OrdersTable = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({status: "", sort: ""});
    const [orderStatus, setOrderStatus] = useState("");
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt");
    const {adminsOrder} = useSelector((store) => store);
    const [anchorElArray, setAnchorElArray] = useState([]);

    useEffect(() => {
        dispatch(getOrders({jwt}));
    }, [jwt, adminsOrder.delivered, adminsOrder.shipped, adminsOrder.confirmed]);

    const handleUpdateStatusMenuClick = (event, index) => {
        const newAnchorElArray = [...anchorElArray];
        newAnchorElArray[index] = event.currentTarget;
        setAnchorElArray(newAnchorElArray);
    };

    const handleUpdateStatusMenuClose = (index) => {
        const newAnchorElArray = [...anchorElArray];
        newAnchorElArray[index] = null;
        setAnchorElArray(newAnchorElArray);
    };

    const handleConfirmedOrder = (orderId, index) => {
        handleUpdateStatusMenuClose(index);
        dispatch(confirmOrder(orderId));
        setOrderStatus("CONFIRMED")
    };

    const handleShippedOrder = (orderId, index) => {
        handleUpdateStatusMenuClose(index);
        dispatch(shipOrder(orderId))
        setOrderStatus("ShIPPED")
    };

    const handleDeliveredOrder = (orderId, index) => {
        handleUpdateStatusMenuClose(index);
        dispatch(deliveredOrder(orderId))
        setOrderStatus("DELIVERED")
    };

    const handleDeleteOrder = (orderId) => {
        handleUpdateStatusMenuClose();
        dispatch(deleteOrder(orderId));
    };

    return (
        <Box>
            <Card className="mt-2">
                <CardHeader
                    title="All Orders"
                    sx={{
                        pt: 2,
                        alignItems: "center",
                        "& .MuiCardHeader-action": {mt: 0.6},
                    }}
                />
                <TableContainer>
                    <Table sx={{minWidth: 800}} aria-label="table in dashboard">
                        <TableHead>
                            <TableRow>
                                <TableCell>Image</TableCell>
                                <TableCell>Title</TableCell>
                                <TableCell>Price</TableCell>
                                <TableCell>Id</TableCell>
                                <TableCell sx={{textAlign: "center"}}>Status</TableCell>
                                <TableCell sx={{textAlign: "center"}}>Update</TableCell>
                                <TableCell sx={{textAlign: "center"}}>Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {adminsOrder?.orders?.map((item, index) => (
                                <TableRow
                                    hover
                                    key={item.name}
                                    sx={{"&:last-of-type td, &:last-of-type th": {border: 0}}}
                                >
                                    <TableCell sx={{}}>
                                        <AvatarGroup max={4} sx={{justifyContent: 'start'}}>
                                            {item.orderItems.map((orderItem) => <Avatar alt={item.title}
                                                                                        src={orderItem.laptop.imageUrl}/>)}
                                        </AvatarGroup>
                                        {" "}
                                    </TableCell>

                                    <TableCell
                                        sx={{py: (theme) => `${theme.spacing(0.5)} !important`}}
                                    >
                                        <Box sx={{display: "flex", flexDirection: "column"}}>
                                            <Typography
                                                sx={{
                                                    fontWeight: 500,
                                                    fontSize: "0.875rem !important",
                                                }}
                                            >
                                                {item?.orderItems.map((order) => (
                                                    <span className=""> {order.laptop.title},</span>
                                                ))}
                                            </Typography>
                                            <Typography variant="caption">
                                                {item?.orderItems.map((order) => (
                                                    <span className="opacity-60">
                            {" "}
                                                        {order.laptop.brand},
                          </span>
                                                ))}
                                            </Typography>
                                        </Box>
                                    </TableCell>

                                    <TableCell>{item.totalPrice}</TableCell>
                                    <TableCell>{item.id}</TableCell>
                                    <TableCell className="text-white">
                                        <Chip
                                            sx={{
                                                color: "white !important",
                                                fontWeight: "bold",
                                                textAlign: "center",
                                            }}
                                            label={item.orderStatus}
                                            size="small"
                                            color={
                                                item.orderStatus === "PENDING" ? "info" : item.orderStatus === "DELIVERED" ? "success" : "secondary"
                                            }
                                            className="text-white"
                                        />
                                    </TableCell>
                                    <TableCell
                                        sx={{textAlign: "center"}}
                                        className="text-white"
                                    >
                                        <div>
                                            <Button
                                                id={`basic-button-${item.id}`}
                                                aria-controls={`basic-menu-${item.id}`}
                                                aria-haspopup="true"
                                                aria-expanded={Boolean(anchorElArray[index])}
                                                onClick={(event) =>
                                                    handleUpdateStatusMenuClick(event, index)
                                                }
                                            >
                                                Status
                                            </Button>
                                            <Menu
                                                id={`basic-menu-${item.id}`}
                                                anchorEl={anchorElArray[index]}
                                                open={Boolean(anchorElArray[index])}
                                                onClose={() => handleUpdateStatusMenuClose(index)}
                                                MenuListProps={{
                                                    "aria-labelledby": `basic-button-${item.id}`,
                                                }}
                                            >
                                                <MenuItem
                                                    onClick={() => handleConfirmedOrder(item.id, index)}
                                                    disabled={item.orderStatus === "DELEVERED" || item.orderStatus === "SHIPPED" || item.orderStatus === "CONFIRMED"}
                                                >
                                                    CONFIRMED ORDER
                                                </MenuItem>
                                                <MenuItem
                                                    disabled={item.orderStatus === "DELIVERED" || item.orderStatus === "SHIPPED"}
                                                    onClick={() => handleShippedOrder(item.id, index)}
                                                >
                                                    SHIPPED ORDER
                                                </MenuItem>
                                                <MenuItem onClick={() => handleDeliveredOrder(item.id)}>
                                                    DELIVERED ORDER
                                                </MenuItem>
                                            </Menu>
                                        </div>
                                    </TableCell>
                                    <TableCell
                                        sx={{textAlign: "center"}}
                                        className="text-white"
                                    >
                                        <Button
                                            onClick={() => handleDeleteOrder(item.id)}
                                            variant="text"
                                        >
                                            delete
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Card>
        </Box>
    );
};

export default OrdersTable;