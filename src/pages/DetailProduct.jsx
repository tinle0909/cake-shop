import React, { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Select, Space } from "antd";
import { images } from "../assets/images/images";
import PrimaryButton from "../components/PrimaryButton";
function DetailProduct() {
  const [option, setOption] = useState({
    size: "",
    type: "",
  });
  const handleChange = (key, value) => {
    setOption((pre) => ({ ...pre, [key]: value }));
  };
  return (
    <div>
      <Grid container spacing={6} className="p-10">
        <Grid md={6}>
          <img src={images.birthday.h3} alt="" className="w-full" />
        </Grid>
        <Grid md={6}>
          <h2>Classic anniversary</h2>
          <p>Price $59.00</p>
          <p>Tax included. Shipping calculated at checkout.</p>
          <div>
            <p>Size</p>
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
          <div>
            <p>Sponge Type</p>
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
            className="add-btn"
            style={{ width: 200 }}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default DetailProduct;
