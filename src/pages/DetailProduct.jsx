import React, { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Select, Space, Modal, Button } from "antd";
import { images } from "../assets/images/images";
import { useNavigate, useLocation } from "react-router-dom";
import { colors } from "../assets/style/color";
import PrimaryButton from "../components/PrimaryButton";
import { AiFillCheckCircle } from "react-icons/ai";

function DetailProduct({}) {
  const location = useLocation();
  document.body.scrollIntoView({ block: "start" });
  const { id, img, price, name } = location.state;
  const [option, setOption] = useState({
    size: "",
    type: "",
  });
  const handleChange = (key, value) => {
    setOption((pre) => ({ ...pre, [key]: value }));
  };
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <div className="detail-product-wrapper">
        <Grid container spacing={2}>
          <Grid
            xs={12}
            md={6}
            className="flex justify-center"
            // style={{ backgroundColor: "red" }}
          >
            <img src={img} alt="" className="detail-product-img " />
          </Grid>
          <Grid xs={12} md={6}>
            <div className="detail-product-content">
              <h2 className="detail-title">{name}</h2>
              <p className="detail-price">Price ${price}</p>
              <p className="detail-ship">
                Tax included. Shipping calculated at checkout.
              </p>
              <div className="detail-option-wrapper">
                <p className="detail-option-name">Size</p>
                <Select
                  defaultValue="20"
                  style={{
                    width: 250,
                    height: 50,
                  }}
                  dropdownStyle={{
                    padding: "10px 0",
                  }}
                  onChange={(value) => handleChange("size", value)}
                  options={[
                    {
                      value: "20",
                      label: "20cm",
                    },
                    {
                      value: "30",
                      label: "30cm (+$3)",
                    },
                    {
                      value: "40 ",
                      label: "40cm (+$6)",
                    },
                  ]}
                />
              </div>
              <div className="detail-option-wrapper">
                <p className="detail-option-name">Sponge Type</p>
                <Select
                  defaultValue="vanilla"
                  style={{
                    width: 250,
                    height: 50,
                  }}
                  onChange={(value) => handleChange("type", value)}
                  options={[
                    {
                      value: "chocolate",
                      label: "Chocolate",
                    },
                    {
                      value: "vanilla",
                      label: "Vanilla",
                    },
                    {
                      value: "fruit",
                      label: "Rich Fruit Cake (+$4)",
                    },
                  ]}
                />
              </div>
              <PrimaryButton
                text="Add to cart"
                className="add-btn detail-add-btn"
                onClick={openModal}
              />
            </div>
          </Grid>
        </Grid>
        <div>
          <p className="detail-desc-title">Description</p>
          <div className="detail-desc-wrapper">
            <p className="detail-desc-field">Ingredients</p>
            <p>
              Eggs, Fresh Milk, Cream, Sugar, Flour, Oil, Corn Flour, Instant
              Custard Powder, Butter, Charcoal Powder, Cream of Tartar, Salt
            </p>
            <p className="detail-desc-field">Flavours</p>
            <p>Bamboo Charcoal</p>
            <p className="detail-desc-field">Storage Method</p>
            <p>Keep refrigerated at 2 – 6°C</p>
            <p className="detail-desc-field">Best Consumed</p>
            <p>Within 2 days</p>
          </div>
        </div>
        <div className="flex justify-center">
          <PrimaryButton
            text="Continue shopping"
            className="back-btn"
            onClick={() => navigate(-1)}
          />
        </div>
      </div>
      <Modal open={showModal} onOk={closeModal} footer={null} closeIcon={false}>
        <div className="">
          <p className="modal-title-wrapper">
            <span className="modal-title">Successfully !</span>
            <AiFillCheckCircle color="#5DB166" size={40} />
          </p>
          <p className="text-center modal-text">
            <span className="modal-name-product">{name}</span> is added to cart
            successfully
          </p>
          <div className="flex justify-center">
            <PrimaryButton text="OK" className="ok-btn" onClick={closeModal} />
          </div>
        </div>
      </Modal>
    </>
  );
}

export default DetailProduct;
