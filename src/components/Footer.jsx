import React from "react";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineYoutube,
  AiOutlineArrowUp,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { scrollToTop } from "../utils";
import { colors } from "../assets/style/color";
function Footer() {
  const navigate = useNavigate();
  const navigateLink = (path) => {
    // scrollToTop();
    document.body.scrollIntoView({ block: "start" });
    navigate(path);
  };
  return (
    <footer className="footer">
      <div>
        <h3>Cakes</h3>
        <ul>
          <li>
            <p
              onClick={() => {
                navigateLink("/products/birthday");
              }}
              className="footer-link"
            >
              Birthday Cakes
            </p>
          </li>
          <li>
            <p
              onClick={() => {
                navigateLink("/products/marriage");
              }}
              className="footer-link"
            >
              Marriage Cakes
            </p>
          </li>
          <li>
            <p
              onClick={() => {
                navigateLink("/products/anniversary");
              }}
              className="footer-link"
            >
              Anniversary Cakes
            </p>
          </li>
          <li>
            <p
              onClick={() => {
                navigateLink("/products/engagement");
              }}
              className="footer-link"
            >
              Engagement Cakes
            </p>
          </li>
        </ul>
      </div>
      <div>
        <h3>Quick links</h3>
        <ul>
          <li>
            <a href="#" className="footer-link">
              About
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              Contact Us
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              Privacy and GDPR
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              FAQs
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h3>Get in Touch</h3>
        <ul>
          <li className="address">
            123-127 Avenue 4, The Covered Market, Oxford OX1 3DZ
          </li>
          <li>01865 248691</li>
          <li className="time-work">Mon to Sat 9:00 - 5:00pm Oxford</li>
          <li className="email"> enquiries@the-cake-shop.co.uk</li>
          <li className="list-social">
            <a href="" className="social">
              <AiOutlineFacebook size={30} />
            </a>{" "}
            <a href="" className="social">
              <AiOutlineInstagram size={30} />
            </a>
            <a href="" className="social">
              <AiOutlineYoutube size={30} />
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-arrow-icon" onClick={scrollToTop}>
        <AiOutlineArrowUp size={30} color={colors.gray} />
      </div>
    </footer>
  );
}

export default Footer;
