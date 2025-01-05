import { useState, useRef } from "react";
import { RadioGroup } from "@headlessui/react";
import { useNavigate, useParams } from "react-router-dom";
import LaptopReviewCard from "./LaptopReviewCard";
import { Box, Button, Grid, IconButton, LinearProgress, Rating, Alert, Snackbar, TextField } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import HomeLaptopCard from "../../Home/HomeLaptopCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findLaptopById } from "../../../Redux/Admin/Laptop/Action";
import { addItemToCart, getCart } from "../../../Redux/Customers/Cart/Action";
import { getAllReviews } from "../../../Redux/Customers/Review/Action";
import { gounsPage1 } from "../../../Data/Gouns/gouns";
import { API_BASE_URL } from "../../../Config/api";

const reviews = { href: "#", average: 4, totalCount: 117 };
function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function LaptopDetails() {
    const scrollRef = useRef(null);
    const [activeImage, setActiveImage] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { laptop } = useSelector((store) => store.laptop);
    const { laptopId } = useParams();
    const jwt = localStorage.getItem("jwt");
    const [openAlert, setOpenAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const [alertSeverity, setAlertSeverity] = useState("success");
    const handleCloseAlert = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenAlert(false);
    };

    useEffect(() => {
        // if (laptop?.laptopColors?.length > 0 ) {
        //     setSelectedColor(laptop.laptopColors[0]);
        // }
        const data = { laptopId: Number(laptopId), jwt };
        dispatch(findLaptopById(data));
        dispatch(getAllReviews(laptopId));
    }, [laptopId]);
    useEffect(() => {
        // Set default color when laptop data is loaded
        if (laptop?.laptopColors?.length > 0) {
            setSelectedColor(laptop.laptopColors[0]);
        }
    }, [laptop]);

    // console.log("param",laptopId,customersLaptop.laptop)
    const [selectedColor, setSelectedColor] = useState(
        laptop?.laptopColors?.[0] || null
    );

    const handleSetActiveImage = (image) => {
        setActiveImage(image);
    };
    const handleQuantityChange = (num) => {
        setQuantity((prev) => Math.min(Math.max(1, prev + num),selectedColor?.quantity??200)); // Ensure quantity is at least 1
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = {
                laptopId: Number(laptopId),
                colorId: selectedColor.colorId,
                quantity
            };
            const result = await dispatch(addItemToCart({ data, jwt }));
            dispatch(getCart(jwt))
            // console.log('result: ', result)

            // if (result.error) {
            //     setAlertSeverity("error");
            //     setAlertMessage("Thêm vào giỏ hàng thất bại!");
            // } else {
            setAlertSeverity("success");
            setAlertMessage("Thêm vào giỏ hàng thành công!");
            // }
            setOpenAlert(true);
        } catch (error) {
            console.log('error: ', error)
            setAlertSeverity("error");
            setAlertMessage("Đã xảy ra lỗi khi thêm vào giỏ hàng!");
            setOpenAlert(true);
        }
    };
    const scroll = (direction) => {
        const container = scrollRef.current;
        if (container) {
            const scrollAmount = 200; // Khoảng cách cuộn mỗi lần
            container.scrollLeft += direction === "left" ? -scrollAmount : scrollAmount;
        }
    };

    const [newReview, setNewReview] = useState({
        des:'',
        review:0
    });
    



    return (
        <div className="bg-white lg:px-20">
            <Snackbar
                open={openAlert}
                autoHideDuration={2000}
                onClose={handleCloseAlert}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert
                    onClose={handleCloseAlert}
                    severity={alertSeverity}
                    sx={{ width: '100%' }}
                >
                    {alertMessage}
                </Alert>
            </Snackbar>
            <div className="pt-6">
                {/* laptop details */}
                <section className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2 px-4 pt-10">
                    {/* Image gallery */}
                    <div className="flex flex-col items-center ">
                        <div className="rounded-lg border border-gray-300 w-full h-full flex justify-center items-center">
                            <img
                                src={activeImage || `${API_BASE_URL}${laptop?.imageUrls[0]}`}
                                alt={laptop?.model}
                                className="max-w-[30rem] max-h-[35rem] object-cover"
                            />
                        </div>
                        <div className="flex flex-wrap space-x-5 justify-center">
                            {laptop?.imageUrls?.map((image) => (
                                <div
                                    onClick={() => handleSetActiveImage(`${API_BASE_URL}${image}`)}
                                    className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[5rem] max-h-[5rem] mt-4"
                                >
                                    <img src={`${API_BASE_URL}${image}`} alt={laptop?.model}
                                        className="h-full w-full object-cover object-center border border-gray"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Laptop info */}
                    <div className="lg:col-span-1 mx-auto max-w-2xl px-4 pb-16 sm:px-6  lg:max-w-7xl  lg:px-8 lg:pb-24">
                        <div className="lg:col-span-2">
                            <h1 className="text-lg lg:text-xl font-semibold tracking-tight text-gray-900  ">
                                {laptop?.brandName}
                            </h1>
                            <h1 className="text-lg lg:text-xl tracking-tight text-gray-900 opacity-60 pt-1">
                                {laptop?.model}
                            </h1>
                        </div>

                        {/* Options */}
                        <div className="mt-4 lg:row-span-3 lg:mt-0">
                            <h2 className="sr-only">Laptop information</h2>
                            <div
                                className="flex space-x-5 items-center text-lg lg:text-xl tracking-tight text-gray-900 mt-6">
                                <p className="opacity-50 line-through">
                                    {laptop?.price} VND
                                </p>
                                <p className="text-green-600 font-semibold">
                                    -{laptop?.discountPercent}%
                                </p>
                                <p className="font-semibold">
                                    {(laptop?.price * (100 - laptop?.discountPercent) / 100)?.toLocaleString('vi-VN')} VND
                                </p>
                            </div>

                            {/* Reviews */}
                            <div className="mt-6">
                                <h3 className="sr-only">Reviews</h3>
                                <div className="flex items-center space-x-3">
                                    <Rating name="read-only" value={4.6} precision={0.5} readOnly />
                                    <p className="opacity-60 text-sm">42807 Ratings</p>
                                    <p className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                        {reviews.totalCount} reviews
                                    </p>
                                </div>
                            </div>

                            <form className="mt-10" onSubmit={handleSubmit}>
                                {/* Color */}
                                <div className="mt-10">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-sm font-medium text-gray-900">Chọn màu phù hợp</h3>
                                    </div>
                                    <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-4">
                                        <RadioGroup.Label className="sr-only">Chọn màu phù hợp</RadioGroup.Label>
                                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-5">
                                            {laptop?.laptopColors.map((color) => (
                                                <RadioGroup.Option
                                                    key={color.colorId}
                                                    value={color}
                                                    disabled={color.quantity < 1}
                                                    className={({ active, checked }) =>
                                                        classNames(
                                                            "m-2",
                                                            color.quantity > 0
                                                                ? "cursor-pointer bg-white text-black shadow-sm"
                                                                : "cursor-not-allowed bg-gray-50 text-gray-200",
                                                            active ? "ring-1 ring-indigo-500" : "",
                                                            checked ? "border-2 border-indigo-500" : "border-transparent",
                                                            "w-20 h-6 group relative flex items-center justify-center rounded-md border py-1 px-1 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
                                                        )
                                                    }
                                                >
                                                    {({ active, checked }) => (
                                                        <>
                                                            <RadioGroup.Label as="span">{color?.colorName}</RadioGroup.Label>
                                                            {color.quantity > 0 && checked && (
                                                                <span
                                                                    aria-hidden="true"
                                                                    className="pointer-events-none absolute -inset-px rounded-md border-2 border-indigo-500"
                                                                />
                                                            )}
                                                        </>
                                                    )}
                                                </RadioGroup.Option>
                                            ))}
                                        </div>
                                    </RadioGroup>
                                </div>
                                <div className="mt-4 flex items-center space-x-2">
                                    <IconButton
                                        onClick={() => handleQuantityChange(-1)}
                                        disabled={quantity <= 1}
                                        color="primary"
                                        aria-label="decrease quantity"
                                    >
                                        <RemoveCircleOutlineIcon />
                                    </IconButton>

                                    <span className="py-1 px-7 border rounded-sm">{quantity+'/'+selectedColor?.quantity}</span>

                                    <IconButton
                                        onClick={() => handleQuantityChange(1)}
                                        color="primary"
                                        aria-label="increase quantity"
                                    >
                                        <AddCircleOutlineIcon />
                                    </IconButton>
                                </div>
                                <Button variant="contained" type="submit" sx={{ padding: ".8rem 2rem", marginTop: "2rem" }}>
                                    Add To Cart
                                </Button>
                            </form>
                        </div>

                        <div
                            className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                            {/* Description and details */}
                            <div>
                                <h3 className="sr-only">Model</h3>
                                <div className="space-y-6">
                                    <p className="text-base text-gray-900">
                                        {laptop?.model}
                                    </p>
                                </div>
                            </div>
                            <div className="mt-10">
                                <h3 className="text-sm font-medium text-gray-900">
                                    Highlights
                                </h3>
                                <div className="mt-4">
                                    <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                                        {laptop?.gpus.map((gpu) => (
                                            <li key={gpu.model} className="text-gray-400">
                                                <span className="text-gray-600">{gpu.model}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* rating and review section */}
                <section className="">
                    <h1 className="font-semibold text-lg pb-4">
                        Nhận xét và đánh giá
                    </h1>
                    <div>
                        <TextField className="mb-4" 
                        value={newReview.des} 
                        onChange={(e,v)=>{
                            setNewReview(pre=>({...pre,des:v}))
                        }} 
                        placeholder="Thêm nhận xét của bạn"/>
                        <Rating
                            name="star-rating"
                            value={newReview.review}
                            onChange={(event, v) => {
                                setNewReview(pre=>({...pre,review:v}))
                            }}
                        />
                    </div>
                    <div className="border p-5 rounded-md mt-3">
                        <Grid container spacing={7}>
                            <Grid item xs={7}>
                                <div className="space-y-5">
                                    {laptop?.reviews?.length > 0 ? (
                                        laptop.reviews.map((item, i) => (
                                            <LaptopReviewCard key={i} item={item} />
                                        ))
                                    ) : (
                                        <p className="text-gray-500">Không có đánh giá nào cho sản phẩm này</p>
                                    )}
                                </div>
                            </Grid>
                            <Grid item xs={5}>
                                <h1 className="text-xl font-semibold pb-1">Laptop Ratings</h1>
                                <div className="flex items-center space-x-3 pb-10">
                                    <Rating name="read-only" value={4.6} precision={0.5} readOnly />
                                    <p className="opacity-60">42807 Ratings</p>
                                </div>
                                <Box>
                                    <Grid container justifyContent="center" alignItems="center" gap={2}>
                                        <Grid xs={2}>
                                            <p className="p-0">Excellent</p>
                                        </Grid>
                                        <Grid xs={7}>
                                            <LinearProgress className="" variant="determinate" value={40} color="success"
                                                sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
                                            />
                                        </Grid>
                                        <Grid xs={2}>
                                            <p className="opacity-50 p-2">19259</p>
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Box>
                                    <Grid container justifyContent="center" alignItems="center" gap={2}>
                                        <Grid xs={2}>
                                            <p className="p-0">Very Good</p>
                                        </Grid>
                                        <Grid xs={7}>
                                            <LinearProgress className="" variant="determinate" value={30} color="success"
                                                sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
                                            />
                                        </Grid>
                                        <Grid xs={2}>
                                            <p className="opacity-50 p-2">19259</p>
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Box>
                                    <Grid container justifyContent="center" alignItems="center" gap={2}>
                                        <Grid xs={2}>
                                            <p className="p-0">Good</p>
                                        </Grid>
                                        <Grid xs={7}>
                                            <LinearProgress className="bg-[#885c0a]" variant="determinate" value={25} color="orange"
                                                sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
                                            />
                                        </Grid>
                                        <Grid xs={2}>
                                            <p className="opacity-50 p-2">19259</p>
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Box>
                                    <Grid container justifyContent="center" alignItems="center" gap={2}>
                                        <Grid xs={2}>
                                            <p className="p-0">Avarage</p>
                                        </Grid>
                                        <Grid xs={7}>
                                            <LinearProgress className="" variant="determinate" value={21} color="success"
                                                sx={{
                                                    bgcolor: "#d0d0d0", borderRadius: 4, height: 7,
                                                    "& .MuiLinearProgress-bar": {
                                                        bgcolor: "#885c0a", // stroke color
                                                    },
                                                }}
                                            />
                                        </Grid>
                                        <Grid xs={2}>
                                            <p className="opacity-50 p-2">19259</p>
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Box>
                                    <Grid container justifyContent="center" alignItems="center" gap={2}>
                                        <Grid xs={2}>
                                            <p className="p-0">Poor</p>
                                        </Grid>
                                        <Grid xs={7}>
                                            <LinearProgress className="" sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
                                                variant="determinate" value={10} color="error"
                                            />
                                        </Grid>
                                        <Grid xs={2}>
                                            <p className="opacity-50 p-2">19259</p>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                        </Grid>
                    </div>
                </section>
            </div>
        </div>
    );
}
