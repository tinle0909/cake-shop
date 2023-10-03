import React, { useEffect, useState } from "react";
import { Space, Table, Tag, Modal } from "antd";
import Grid from "@mui/material/Unstable_Grid2";
import { AiOutlinePlusCircle, AiFillDelete } from "react-icons/ai";
import { GrSubtractCircle } from "react-icons/gr";
import { colors } from "../assets/style/color";
import { useCartStore, useProductStore } from "../zustand/store";
import { MdOutlineRemoveCircleOutline } from "react-icons/md";
import { ExclamationCircleFilled } from "@ant-design/icons";

function Cart() {
  const { Column } = Table;
  const { carts, updateQuantity, removeCart } = useCartStore((state) => state);
  const [list, setList] = useState();
  const { confirm } = Modal;
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
        console.log("Cancel");
      },
      okType: "danger",
    });
  };
  console.log(carts);
  const listCarts = carts.map((item) => ({
    ...item,
    product: { image: item.image, name: item.name },
    subtotal: Number(item.price) * item.quantity,
    quantity: { id: item.id, total: item.quantity },
  }));
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
  useEffect(() => {
    setList(listCarts);
  }, [carts]);
  return (
    <>
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
                title={() => <p className="text-center">SUBTOTAL</p>}
                dataIndex="id"
                key="subtotal"
                render={(item) => (
                  <div className="flex justify-center">
                    <button
                      onClick={async () => {
                        const data = await carts.find(
                          (product) => product.id === item
                        );
                        console.log("====================================");
                        console.log(data);
                        console.log("====================================");
                        showConfirm(data);
                      }}
                    >
                      <AiFillDelete size={25} color="red" />
                    </button>
                  </div>
                )}
              />
            </Table>
          </Grid>
          <Grid xs={12} md={4}>
            <div>
              <h2>CART TOTALS</h2>
              <div>
                <p>Subtotal</p>
                <p>$100</p>
              </div>
              <div>
                <p>Total</p>
                <p>$120</p>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Cart;
