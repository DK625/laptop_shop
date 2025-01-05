import axios from "axios";
import { hmac } from "js-sha256"; // Import thư viện js-sha256

function generateRandomNumber() {
  const timestamp = Date.now().toString();
  const randomValue = Math.floor(Math.random() * 10000)
    .toString()
    .padStart(4, "0");
  return parseInt(timestamp.slice(-11) + randomValue);
}

function generateUniqueId(length = 6) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  return Array.from(
    { length },
    () => chars[Math.floor(Math.random() * chars.length)]
  ).join("");
}

function calculateSignature(data) {
  const sortedData = Object.keys(data)
    .sort()
    .map((key) => `${key}=${data[key]}`)
    .join("&");

  // Tạo chữ ký HMAC SHA-256 bằng js-sha256
  return hmac(
    "3c26171d91490b02b7908c549b4e02538e030e489399e79770f0d08b4cde03a4",
    sortedData
  );
}

async function createUrLPayment(amount, id) {
  const paymentData = {
    orderCode: generateRandomNumber(),
    amount: 2000,
    description: id,
    cancelUrl: "http://localhost:3000/account/order",
    returnUrl: "http://localhost:3000/payment/success",
  };

  // Thêm chữ ký vào dữ liệu thanh toán
  paymentData["signature"] = calculateSignature(paymentData);
  paymentData["expiredAt"] = Math.floor(Date.now() / 1000) + 36000000;

  try {
    // Gửi yêu cầu tạo URL thanh toán
    const response = await axios.post(
      `https://api-merchant.payos.vn/v2/payment-requests`,
      paymentData,
      {
        headers: {
          "x-client-id": "8313ca80-18a4-495a-a54c-05c20b8848f3",
          "x-api-key": "66ac2403-5a77-45b9-b100-f97b27457e67",
          "Content-Type": "application/json",
        },
      }
    );

    console.log("cls-linh", response.data, paymentData);
    return response.data.data.checkoutUrl;
  } catch (error) {
    console.error("Error creating payment URL:", error);
    throw error;
  }
}

async function getInfoPayment(id) {
  try {
    const response = await axios.get(
      `https://api-merchant.payos.vn/v2/payment-requests/${id}`,
      {
        headers: {
          "x-client-id": "8313ca80-18a4-495a-a54c-05c20b8848f3",
          "x-api-key": "66ac2403-5a77-45b9-b100-f97b27457e67",
          "Content-Type": "application/json",
        },
      }
    );
    return response.data.data;
  } catch (error) {
    console.error("Error creating payment URL:", error);
    throw error;
  }
}

export { createUrLPayment, getInfoPayment };
