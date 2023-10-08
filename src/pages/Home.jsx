import React, { useState } from "react";
import PrimaryButton from "@components/PrimaryButton";
import { colors } from "../assets/style/color";
import { images } from "../assets/images/images";
import CardProduct from "../components/CardProduct";
import { SiCakephp } from "react-icons/si";
import { FaLocationDot } from "react-icons/fa6";
import { MdPayments, MdDeliveryDining } from "react-icons/md";
import Grid from "@mui/material/Unstable_Grid2";
import { useNavigate } from "react-router-dom";
import { useCartStore, useProductStore } from "../zustand/store";
import { MdTaskAlt } from "react-icons/md";
import { Modal } from "antd";

function Home() {
  const products = useProductStore((state) => state.products);
  const navigate = useNavigate();
  const { addCart, carts, updateQuantity } = useCartStore((state) => state);
  const [showModal, setShowModal] = useState(false);
  const [nameCakeModal, setNameCakeModal] = useState("");
  const closeModal = () => {
    setShowModal(false);
  };
  const anniversaryCakes = products
    .filter((item) => item.category === "anniversary")
    .slice(0, 4);
  const birthdayCakes = products
    .filter((item) => item.category === "birthday")
    .slice(0, 4);
  const handleAdd = (name, id) => {
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
    <div className="home-main">
      <section
        className="home-banner"
        style={{ backgroundImage: `url(${images.banner})` }}
      >
        <h1>Beautiful Cakes for Every Occasion</h1>
        <p>
          Choose one of our ready made designs or create your own bespoke
          masterpiece!
        </p>
        <PrimaryButton
          text="See All Cakes"
          background={colors.primary}
          className={"primary-button"}
          onClick={() => navigate("products/all")}
        />
      </section>
      <section className="home-best-seller">
        <h1>Birthday Cakes</h1>
        <div className="best-seller-product">
          <Grid container spacing={6}>
            {birthdayCakes.map((item) => (
              <Grid sm={6} xs={12} md={3} key={item.id}>
                <CardProduct
                  img={item.image}
                  name={item.name}
                  price={item.price}
                  handleAdd={handleAdd}
                />
              </Grid>
            ))}
          </Grid>
        </div>
        <div className="container-view-btn">
          <PrimaryButton
            text="View All"
            color={colors.white}
            background={colors.primary}
            backgroundHover={colors.white}
            colorTextHover={colors.primary}
            className={"primary-button"}
            onClick={() => {
              navigate("/products/birthday");
            }}
          />
        </div>
      </section>
      <section className="home-step-order">
        <h1 className="step-order-title">How does it work</h1>
        <div className="step-order-wrapper">
          <Grid container spacing={8}>
            <Grid xs={6} md={3}>
              <div className="wrapper-step">
                <SiCakephp
                  size={50}
                  color={colors.primary}
                  className="step-icon"
                />
                <h3 className="step-order-name">Choose order</h3>
                <p className="step-order-desc">
                  Check over hundreds of menus to pick your favorite food
                </p>
              </div>
            </Grid>
            <Grid xs={6} md={3}>
              <div className="wrapper-step">
                <FaLocationDot size={50} color={colors.primary} />
                <h3 className="step-order-name">Select location</h3>
                <p className="step-order-desc">
                  Choose the location where your food will be delivered.
                </p>
              </div>
            </Grid>
            <Grid xs={6} md={3}>
              <div className="wrapper-step">
                <MdPayments size={50} color={colors.primary} />
                <h3 className="step-order-name">Pay advanced</h3>
                <p className="step-order-desc">
                  It's quick, safe, and simple. Select several methods of
                  payment
                </p>
              </div>
            </Grid>
            <Grid xs={6} md={3}>
              <div className="wrapper-step">
                <MdDeliveryDining size={50} color={colors.primary} />
                <h3 className="step-order-name">Enjoy meals</h3>
                <p className="step-order-desc">
                  Food is made and delivered directly to your home.
                </p>
              </div>
            </Grid>
          </Grid>
        </div>
      </section>

      <section className="home-best-seller">
        <h1>Anniversary Cakes</h1>
        <div className="best-seller-product">
          <Grid container spacing={6}>
            {anniversaryCakes.map((item) => (
              <Grid sm={6} xs={12} md={3} key={item.id}>
                <CardProduct
                  img={item.image}
                  name={item.name}
                  price={item.price}
                  handleAdd={handleAdd}
                />
              </Grid>
            ))}
          </Grid>
        </div>
        <div className="container-view-btn">
          <PrimaryButton
            text="View All"
            color={colors.white}
            background={colors.primary}
            backgroundHover={colors.white}
            colorTextHover={colors.primary}
            className={"primary-button"}
            onClick={() => {
              navigate("/products/anniversary");
            }}
          />
        </div>
      </section>
      <section className="home-banner2">
        <Grid container spacing={3}>
          <Grid xs={12} md={6}>
            <div className="banner2">
              <img src={images.banner2} alt="" />
            </div>
          </Grid>
          <Grid xs={12} md={6}>
            <div className="home-desc">
              <h3>The Cake Shop</h3>
              <p>
                Choose one of our ready-made designs or create your own bespoke
                masterpiece! Fresh from The Cake Shop, customised for you. Due
                to the intricate and fragile nature of our creations, all our
                cakes can be collected from our Oxford shop or delivered within
                a 50-mile radius by our dedicated Cake Shop drivers. Check here
                to see if you are inside our delivery area. If you’re not within
                our delivery area, please call to discuss options.
              </p>
            </div>
          </Grid>
        </Grid>
      </section>
      <section className="home-description">
        <h2 className="home-description-title">
          The Wonderful World of The Cake
        </h2>
        <p className="home-description-detail">
          Each day, over 1000 cake makers descend on The Cake stores nationwide
          to make fresh cakes for thousands of people across the UK. Each cake
          is made fresh in-store with loving care by our expert cake makers and
          decorators. We know that every single cake has a special meaning for
          someone and we take immense pride in that. Most of our cakes come with
          a beautifully hand piped message of your choice to add a little
          personal touch. It is our mission to make every celebration a piece of
          cake.
        </p>
      </section>
      <Modal open={showModal} onOk={closeModal} footer={null} closeIcon={false}>
        <div className="">
          <p className="modal-title-wrapper">
            <span className="modal-title">Successfully !</span>
            <MdTaskAlt color="#5DB166" size={40} />
          </p>
          <p className="text-center modal-text">
            <span className="modal-name-product">{nameCakeModal}</span> is added
            to cart successfully
          </p>
          <div className="flex justify-center">
            <PrimaryButton text="OK" className="ok-btn" onClick={closeModal} />
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Home;
