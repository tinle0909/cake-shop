import React, { useEffect, useState } from "react";
import { Space, Table, Tag, Modal, message } from "antd";
import Grid from "@mui/material/Unstable_Grid2";
import { AiOutlinePlusCircle, AiFillDelete } from "react-icons/ai";
import { GrSubtractCircle } from "react-icons/gr";
import { colors } from "../assets/style/color";
import { useCartStore, useProductStore } from "../zustand/store";
import { MdOutlineRemoveCircleOutline } from "react-icons/md";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();
  const { Column } = Table;
  const { carts, updateQuantity, removeCart } = useCartStore((state) => state);
  const [list, setList] = useState();
  const [coupon, setCoupon] = useState("");
  const { confirm } = Modal;
  const [messageApi, contextHolder] = message.useMessage();
  const listCarts = carts.map((item) => ({
    ...item,
    product: { image: item.image, name: item.name },
    subtotal: Number(item.price) * item.quantity,
    quantity: { id: item.id, total: item.quantity },
  }));
  const [cartTotal, setCartTotal] = useState({
    subtotal: 0,
    promotion: 0,
    total: 0,
  });
  const successCoupon = () => {
    messageApi.open({
      type: "success",
      content: "Coupon is applied successfully!",
    });
  };
  const failCoupon = () => {
    messageApi.open({
      type: "error",
      content: "Coupon is not exist!",
    });
  };
  const showConfirm = (item) => {
    confirm({
      title: (
        <div>
          Do you want to remove <span>{item.name} ?</span>
        </div>
      ),
      icon: <ExclamationCircleFilled />,
      onOk() {
        removeCart(item.id);
      },
      onCancel() {
        // console.log("Cancel");
      },
      okType: "danger",
    });
  };
  const error = () => {
    Modal.error({
      title: "Can't checkout now !",
      content: "Don't have any product in cart !",
      okButtonProps: {
        style: { backgroundColor: colors.primary, width: "80px" },
      },
    });
  };
  const handleChange = (id, value) => {
    const rs = carts.map((item) =>
      item.id === id ? { ...item, quantity: value } : item
    );
    updateQuantity(rs);
  };
  const handleQuantity = (action, item) => {
    if (action === "+") {
      handleChange(item.id, item.total + 1);
    } else {
      item.total > 1
        ? handleChange(item.id, item.total - 1)
        : handleChange(item.id, 1);
    }
  };
  const handleCoupon = () => {
    if (coupon === "123") {
      successCoupon();
      setCartTotal((pre) => ({ ...pre, promotion: 5 }));
    } else {
      failCoupon();
    }
    setCoupon("");
  };
  const handleCheckout = () => {
    if (listCarts.length < 1) {
      error();
      return;
    } else {
      navigate("/checkout", {
        state: {
          products: listCarts,
          promotion: cartTotal.promotion,
        },
      });
    }
  };
  useEffect(() => {
    setList(listCarts);
    setCartTotal((pre) => ({
      ...pre,
      subtotal: listCarts.reduce((acc, curr) => acc + Number(curr.subtotal), 0),
    }));
  }, [carts]);
  return (
    <>
      {contextHolder}
      <div className="cart-wrapper">
        <Grid container spacing={4}>
          <Grid xs={12} md={8}>
            <Table dataSource={list} pagination={false}>
              <Column
                title={() => <p className="text-center">PRODUCT</p>}
                dataIndex="product"
                key="product"
                render={(item) => (
                  <div className="flex table-product">
                    <div className="w-1/3">
                      <img
                        src={item.image}
                        alt=""
                        style={{ width: "50px", height: "50px" }}
                      />
                    </div>
                    <p className="w-2/3">{item.name}</p>
                  </div>
                )}
              />
              <Column
                title={() => <p className="text-center">PRICE</p>}
                dataIndex="price"
                key="price"
                render={(item) => (
                  <div className="flex justify-evenly">
                    <p className="text-center">${item}</p>
                  </div>
                )}
              />
              <Column
                title={() => <p className="text-center">QUANTITY</p>}
                dataIndex="quantity"
                key="quantity"
                render={(item) => (
                  <div className="flex justify-evenly">
                    <button
                      onClick={() => {
                        handleQuantity("-", item);
                      }}
                    >
                      <MdOutlineRemoveCircleOutline
                        size={25}
                        color={colors.primary}
                      />
                    </button>
                    <p className="text-center">{item.total}</p>
                    <button
                      onClick={() => {
                        handleQuantity("+", item);
                      }}
                    >
                      <AiOutlinePlusCircle size={25} color={colors.primary} />
                    </button>
                  </div>
                )}
              />
              <Column
                title={() => <p className="text-center">SUBTOTAL</p>}
                dataIndex="subtotal"
                key="subtotal"
                render={(item) => (
                  <div className="flex justify-evenly">
                    <p className="text-center">${item}</p>
                  </div>
                )}
              />
              <Column
                title={() => <p className="text-center"></p>}
                dataIndex="id"
                key="subtotal"
                render={(item) => (
                  <div className="flex justify-center">
                    <button
                      onClick={async () => {
                        const data = await carts.find(
                          (product) => product.id === item
                        );
                        showConfirm(data);
                      }}
                    >
                      <AiFillDelete size={25} color="red" />
                    </button>
                  </div>
                )}
              />
            </Table>
            <div>
              <input
                className="border-2 p-3 mr-4"
                type="text"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                placeholder="Enter coupon"
              />
              <button className="cart-total-btn" onClick={handleCoupon}>
                APPLY COUPON
              </button>
            </div>
          </Grid>
          <Grid xs={12} md={4}>
            <div className="cart-total-wrapper">
              <h2 className="text-xl font-medium pt-3 pb-3">CART TOTALS</h2>
              <div className="flex justify-between items-center">
                <p>Subtotal</p>
                <p className="cart-total-price">${cartTotal.subtotal}</p>
              </div>
              <div className="flex justify-between items-center">
                <p>Discount</p>
                <p className="cart-total-price">-${cartTotal.promotion}</p>
              </div>
              <div className="flex justify-between items-center">
                <p>VAT</p>
                <p className="cart-total-price">8%</p>
              </div>
              <div className="flex justify-between border-t-2 mt-3 pt-3  items-center">
                <p className="text-lg">Total</p>
                <p className="cart-total-final">
                  $
                  {(cartTotal.subtotal * 1.08 - cartTotal.promotion).toFixed(1)}
                </p>
              </div>
              <div className="flex justify-center">
                <button className="cart-total-btn" onClick={handleCheckout}>
                  PROCEED TO CHECKOUT
                </button>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Cart;
