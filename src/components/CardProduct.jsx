import React from "react";
import CardImage from "./CardImage";
import PrimaryButton from "./PrimaryButton";
import { AiOutlineShoppingCart } from "react-icons/ai";
// import { colors } from "../assets/style/color";
import { images } from "../assets/images/images";
import { useNavigate } from "react-router-dom";

function CardProduct({ img, name, price, id, classname }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("detailProduct");
  };
  return (
    <div style={{ width: "100%" }} className="card-product">
      <div
        style={{ overflow: "hidden", borderRadius: "10px" }}
        onClick={handleClick}
      >
        <img
          src={img ? img : images.birthday.h3}
          className="card-product-img"
        />
      </div>
      <div className="card-product-desc">
        <p className="card-product-name">{name}</p>
        <p className="card-product-price">${price}</p>
      </div>
      <button className="add-btn">
        <span style={{ marginRight: "20px" }}>Add to cart</span>{" "}
        <AiOutlineShoppingCart size={25} color="#fff" />
      </button>
    </div>
  );
}

export default CardProduct;
