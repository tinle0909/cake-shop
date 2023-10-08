import Grid from "@mui/material/Unstable_Grid2";
import React from "react";
import { images } from "../assets/images/images";
import PrimaryButton from "../components/PrimaryButton";

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
      <Grid container spacing={6}>
        <Grid xs={12} md={6}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.547141078503!2d106.70816237525837!3d10.845926657907441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f05f2302f9f%3A0x8d252d2bb56b804c!2sFPT%20Arena%20Multimedia!5e0!3m2!1sen!2s!4v1696513980601!5m2!1sen!2s"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Grid>
        <Grid xs={12} md={6} className="p-6">
          <div className="p-6 flex flex-col items-center gap-6">
            <h2 className="text-2xl">Contact Us</h2>
            <div className="contact-input-wrapper">
              <p htmlFor="fullname" className="contact-field">
                Fullname
              </p>
              <input
                type="text"
                id="fullname"
                className="contact-input"
                placeholder="Enter fullname"
              />
            </div>
            <div className="contact-input-wrapper">
              <p htmlFor="phone" className="contact-field">
                Phone
              </p>
              <input
                type="text"
                id="phone"
                className="contact-input"
                placeholder="Enter phone"
              />
            </div>
            <div lassName="contact-input-wrapper">
              <p htmlFor="email" className="contact-field">
                Email
              </p>
              <input
                type="text"
                id="email"
                className="contact-input"
                placeholder="Enter email"
              />
            </div>
            <div>
              <PrimaryButton text="SEND" className="contact-send" />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default AboutUs;
