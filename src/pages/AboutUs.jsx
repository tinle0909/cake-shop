import Grid from "@mui/material/Unstable_Grid2";
import React from "react";
import { images } from "../assets/images/images";

function AboutUs() {
  return (
    <div className="about-us-main">
      <div>
        <div className="about-us-title">
          <span className="border-b-4">Foundation</span>
        </div>
        <Grid container spacing={6}>
          <Grid md={6}>
            <img src={images.about3} className="foundation-img" />
          </Grid>
          <Grid md={6} className="justify-center flex items-center">
            <p className="about-us-desc">
              The company began its journey in 2008 with one small store. In
              2022, we now have 195+ branches with many more to come this year.
              Here at The Cake Shop we like to think of each other as family,
              and our success is because we have held on to our family values.
              We have extended the family circle to include our customers. To us
              the customer is not somebody who simply buys a cake from one of
              our stores. When we make a cake for somebody’s special occasion,
              we know that we are being allowed into the person’s family via the
              cake. That is why each cake is baked and decorated as if it was
              meant for a member of one of our families.
            </p>
          </Grid>
        </Grid>
      </div>
      <div>
        <div className="about-us-title">
          <span className="border-b-4">Vision</span>
        </div>
        <Grid container spacing={6}>
          <Grid md={6} className="justify-center flex items-center">
            <p className="about-us-desc">
              The Cake Shop vision is to collaborate with the customers in
              creating custom, fashionable, unique to them, and one of kind
              design bakeries for occasions with guarantee satisfaction bringing
              happiness and excitement to each customer. Provide the top quality
              of taste to each individual pieces of art as the customer
              envisioned. Provide the same vision and communication to customers
              to exceed the customers’ expectations. Build a business by
              engaging in the customer experience, innovation, and customer
              focus, delivery of results, trusting, inspired, and successfully
              reaching expectation. Provide for the communities for which the
              business serves with quality products and give back to what makes
              communities cohesive.
            </p>
          </Grid>
          <Grid md={6}>
            <img src={images.about4} className="foundation-img" />
          </Grid>
        </Grid>
      </div>
      <div>
        <div className="about-us-title">
          <span className="border-b-4">Mission</span>
        </div>
        <Grid container spacing={6}>
          <Grid md={6}>
            <img src={images.about5} className="foundation-img" />
          </Grid>
          <Grid md={6} className="justify-center flex items-center">
            <p className="about-us-desc">
              The mission is to enthusiastically re-invent the way the customers
              enjoy the collaborative expression of unique, eloquent, and
              “outside the box” thinking in bakery designs allowing to exceed
              the customer expectations. The goal, provide supreme product and
              customer experience using quality ingredients and new techniques
              to create a product truly superior in taste and design. Provide
              appreciation to each guest for the opportunity to serve them and
              provide happiness and joy through the art of food.
            </p>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default AboutUs;
