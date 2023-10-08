import React, { useState, useCallback } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Select, Space, Modal, Button } from "antd";
import { images } from "../assets/images/images";
import { useNavigate, useLocation } from "react-router-dom";
import { colors } from "../assets/style/color";
import PrimaryButton from "../components/PrimaryButton";
import { AiFillCheckCircle, AiOutlineZoomIn } from "react-icons/ai";
import ImageViewer from "react-simple-image-viewer";
import { useCartStore, useProductStore } from "../zustand/store";
import { MdTaskAlt } from "react-icons/md";

function DetailProduct() {
  const location = useLocation();
  document.body.scrollIntoView({ block: "start" });
  const { id, img, price, name } = location.state;
  const products = useProductStore((state) => state.products);
  const [option, setOption] = useState({
    size: "",
    type: "",
  });
  const { addCart, carts, updateQuantity } = useCartStore((state) => state);
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage("");
    setIsViewerOpen(false);
  };

  const handleChange = (key, value) => {
    setOption((pre) => ({ ...pre, [key]: value }));
  };
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [nameCakeModal, setNameCakeModal] = useState("");
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const handleAdd = () => {
    const item = carts.find((product) => product.id === id);
    if (item) {
      const rs = carts.map((product) =>
        product.id === item.id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
      updateQuantity(rs);
    } else {
      const newItem = products.find((product) => product.id === id);
      console.log(item);
      const a = [...carts, { ...newItem, quantity: 1 }];
      console.log(a);
      updateQuantity(a);
    }
    // console.log(item);
    setShowModal(true);
    setNameCakeModal(name);
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
            <img
              src={img}
              alt=""
              className="detail-product-img "
              onClick={() => openImageViewer(0)}
            />
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
                onClick={handleAdd}
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
      {isViewerOpen && (
        <ImageViewer
          src={[img]}
          currentIndex={currentImage}
          disableScroll={false}
          closeOnClickOutside={true}
          onClose={closeImageViewer}
        />
      )}
    </>
  );
}

export default DetailProduct;
