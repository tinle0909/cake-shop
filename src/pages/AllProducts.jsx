import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import CardProduct from "../components/CardProduct";
import { BiSort } from "react-icons/bi";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { colors } from "../assets/style/color";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useParams } from "react-router-dom";
import { Alert, Space, Spin, Modal } from "antd";
import PrimaryButton from "../components/PrimaryButton";
import { AiFillCheckCircle } from "react-icons/ai";
import { MdTaskAlt } from "react-icons/md";
import { useCartStore, useProductStore } from "../zustand/store";

function AllProducts() {
  const { category } = useParams();
  const products = useProductStore((state) => state.products);
  const [listProduct, setListProduct] = useState([]);
  const [optionSort, setOptionSort] = useState("a-z");
  const itemsPerPage = 12;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = listProduct.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(listProduct.length / itemsPerPage);
  const [isLoading, setIsLoading] = useState(true);
  const filterCategory = async () => {
    if (category !== "all") {
      const list = await products.filter((item) => item.category === category);
      setListProduct(list);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
      return;
    }
    setListProduct(products);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };
  const list = {
    all: {
      title: "All Cakes",
    },
    birthday: {
      title: "Birthday Cakes",
    },
    anniversary: {
      title: "Anniversary Cakes",
    },
    engagement: {
      title: "Engagement Cakes",
    },
    marriage: {
      title: "Marriage Cakes",
    },
  };

  const Items = ({ currentItems }) => {
    return (
      <Grid container spacing={6}>
        {currentItems &&
          currentItems.map((item) => {
            return (
              <Grid sm={6} xs={12} md={3} key={item.id}>
                <CardProduct
                  img={item.image}
                  name={item.name}
                  price={item.price}
                  id={item.id}
                  handleAdd={handleAdd}
                />
              </Grid>
            );
          })}
      </Grid>
    );
  };
  const handlePageClick = (event, page) => {
    const newOffset = ((page - 1) * itemsPerPage) % listProduct.length;
    setItemOffset(newOffset);
    document.body.scrollIntoView({ behavior: "auto", block: "start" });
  };
  const handleSort = (option) => {
    switch (option) {
      case "a-z":
        setListProduct(
          [...listProduct].toSorted((a, b) => a.name.localeCompare(b.name))
        );
        break;
      case "z-a":
        setListProduct(
          [...listProduct]
            .toSorted((a, b) => a.name.localeCompare(b.name))
            .reverse()
        );
        break;
      case "high-low":
        setListProduct(
          [...listProduct]
            .toSorted((a, b) => Number(a.price) - Number(b.price))
            .reverse()
        );
        break;
      case "low-high":
        setListProduct(
          [...listProduct].toSorted((a, b) => Number(a.price) - Number(b.price))
        );
        break;
      default:
        setListProduct(products);
        break;
    }
  };
  const handleChange = (event) => {
    setOptionSort(event.target.value);
    handleSort(event.target.value);
  };
  useEffect(() => {
    document.body.scrollIntoView({ block: "start" });
    setIsLoading(true);
    filterCategory();
    return () => {};
  }, [category]);
  const [showModal, setShowModal] = useState(false);
  const [nameCakeModal, setNameCakeModal] = useState("");
  const { addCart, carts, updateQuantity } = useCartStore((state) => state);
  const closeModal = () => {
    setShowModal(false);
  };
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
    <>
      <div className="all-product-main">
        <h1 className="all-product-title">{list[category].title}</h1>
        {isLoading ? (
          <Spin tip="Loading" size="large">
            <div className="loading-content" />
          </Spin>
        ) : (
          <>
            <div className="wrapper-sort-bar">
              <div className="wrapper-sort">
                <BiSort color={colors.primary} />
                <p className="sort-label">SORT BY</p>
                <Select value={optionSort} onChange={handleChange} displayEmpty>
                  <MenuItem value={"a-z"}>A-Z</MenuItem>
                  <MenuItem value={"z-a"}>Z-A</MenuItem>
                  <MenuItem value={"low-high"}>Price-Low to High</MenuItem>
                  <MenuItem value={"high-low"}>Price-High to Low</MenuItem>
                </Select>
              </div>
              <div>{listProduct.length} Products</div>
            </div>
            {listProduct.length > 0 ? (
              <>
                <Items currentItems={currentItems} />
                <Stack spacing={2} className="wrapper-pagination">
                  <Pagination
                    count={pageCount}
                    boundaryCount={2}
                    variant="outlined"
                    shape="rounded"
                    onChange={handlePageClick}
                    className="pagination"
                  />
                </Stack>
              </>
            ) : (
              <div className="text-center">Dont't have any cake.</div>
            )}
          </>
        )}
      </div>
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
    </>
  );
}

export default AllProducts;
