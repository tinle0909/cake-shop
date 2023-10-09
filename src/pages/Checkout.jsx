import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2";
import PrimaryInput from "../components/PrimaryInput";
import PrimaryButton from "../components/PrimaryButton";
import { colors } from "../assets/style/color";
import { Modal } from "antd";
import { MdTaskAlt } from "react-icons/md";
import { useCartStore } from "../zustand/store";

function Checkout() {
  const { carts, updateQuantity, removeCart } = useCartStore((state) => state);
  const location = useLocation();
  const { products, promotion } = location.state;
  const [infoUser, setInfoUser] = useState({
    fullname: "",
    address: "",
    phone: "",
    email: "",
    note: "",
  });
  const [showModal, setShowModal] = useState(false);

  const subtotal = products.reduce((acc, curr) => acc + curr.subtotal, 0);
  const total = subtotal - promotion + 5;
  const navigate = useNavigate();
  const closeModal = () => {
    navigate("/products/all");
    setShowModal(false);
  };
  const openModal = () => {
    setShowModal(true);
  };
  const handleCheckout = () => {
    if (!infoUser.fullname || !infoUser.address || !infoUser.phone) {
      alert("Please enter information");
      return;
    }
    updateQuantity([]);
    openModal();
  };
  const handleChange = (key, value) => {
    setInfoUser((pre) => ({ ...pre, [key]: value }));
  };
  return (
    <>
      <div className="checkout-wrapper">
        <Grid container spacing={6}>
          <Grid xs={12} md={6}>
            <form className="checkout-form">
              <div>
                <p>
                  Fullname <span className="text-red-600">*</span>
                </p>
                <PrimaryInput
                  placeholder={"Enter fullname"}
                  className="checkout-input"
                  value={infoUser.fullname}
                  onChange={(e) => handleChange("fullname", e.target.value)}
                />
              </div>
              <div>
                <p>
                  Address <span className="text-red-600">*</span>
                </p>
                <PrimaryInput
                  placeholder={"Enter Address"}
                  className="checkout-input"
                  value={infoUser.address}
                  onChange={(e) => handleChange("address", e.target.value)}
                />
              </div>
              <div>
                <p>
                  Phone <span className="text-red-600">*</span>
                </p>
                <PrimaryInput
                  placeholder={"Enter phone"}
                  className="checkout-input"
                  value={infoUser.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                />
              </div>
              <div>
                <p>Email</p>
                <PrimaryInput
                  placeholder={"Enter email"}
                  className="checkout-input"
                />
              </div>
              <div>
                <p>Order notes</p>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="8"
                  className="p-3 border-2 checkout-input"
                  placeholder="Enetr note"
                ></textarea>
              </div>
            </form>
          </Grid>
          <Grid xs={12} md={6}>
            <div className="checkout-bill">
              <div className="checkout-total">
                <div className="flex justify-between pt-4 pb-4 border-b-4">
                  <p className="text-black text-lg font-medium">PRODUCT</p>
                  <p className="text-black text-lg font-medium">SUBTOTAL</p>
                </div>
                {products.map((item) => (
                  <div className="flex justify-between border-b-2 pt-4 pb-4">
                    <p className="text-gray-500">
                      {item.name} × <span>{item.quantity.total}</span>
                    </p>
                    <p className="text-gray-500">${item.subtotal}</p>
                  </div>
                ))}

                <div className="flex justify-between pt-4 pb-4 border-b-2">
                  <p className="text-black text-base font-medium">Subtotal</p>
                  <p>${subtotal}</p>
                </div>
                <div className="flex justify-between border-b-2 pt-4 pb-4">
                  <p>Discount</p>
                  <p>-${promotion}</p>
                </div>
                <div className="flex justify-between border-b-2 pt-4 pb-4">
                  <p>Tax ship</p>
                  <p>$5</p>
                </div>
                <div className="flex justify-between pt-4 pb-4 ">
                  <p className="text-black text-lg font-medium">Total</p>
                  <p
                    className="text-2xl font-medium"
                    style={{ color: colors.purple }}
                  >
                    ${total.toFixed(1)}
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <PrimaryButton
                  text="PLACE ORDER"
                  className="checkou-btn"
                  onClick={handleCheckout}
                />
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <Modal open={showModal} onOk={closeModal} footer={null} closeIcon={false}>
        <div className="">
          <p className="modal-title-wrapper">
            <span className="modal-title">Order Placed</span>
            <MdTaskAlt color="#5DB166" size={40} />
          </p>
          <p className="text-center modal-text">
            Your order has been placed successfully !
          </p>
          <div className="flex justify-center">
            <PrimaryButton
              text="Continue Shopping"
              className="ok-btn checkout-modal-btn"
              onClick={closeModal}
            />
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Checkout;
