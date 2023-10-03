import React from "react";
import { images } from "@assets/images/images";
import { colors } from "@assets/style/color";
import {
  AiOutlineShopping,
  AiOutlineSearch,
  AiOutlineDown,
} from "react-icons/ai";
import { useNavigate, NavLink } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { Dropdown, message, Space } from "antd";
import styled from "styled-components";
function Header() {
  const navigate = useNavigate();
  const Title = styled.p`
    color: ${colors.gray};
    text-align: center;
    transition: all 0.5s;
    font-size: 18px;
    padding: 10px 0;
    font-weight: 500;
    &:hover {
      color: ${colors.primary};
    }
  `;
  const items = [
    {
      label: (
        <Title
          onClick={() => {
            navigate("/products/birthday");
          }}
          className="sub-menu"
        >
          Birthday
        </Title>
      ),
      key: "1",
    },
    {
      label: (
        <Title
          onClick={() => {
            navigate("/products/anniversary");
          }}
          className="sub-menu"
        >
          Anniversary
        </Title>
      ),
      key: "2",
    },
    {
      label: (
        <Title
          onClick={() => {
            navigate("/products/engagement");
          }}
          className="sub-menu"
        >
          Engagement
        </Title>
      ),
      key: "3",
    },
    {
      label: (
        <Title
          onClick={() => {
            navigate("/products/marriage");
          }}
          className="sub-menu"
        >
          Marriage
        </Title>
      ),
      key: "4",
    },
  ];
  return (
    <nav className=" header flex" style={{ backgroundColor: colors.primary }}>
      <div className="logo">
        <NavLink to="/">
          <img src={images["logo"]} width={100} height={100} />
        </NavLink>
      </div>
      <div className="navbar">
        <NavLink to="/" className="link">
          Home
        </NavLink>
        <NavLink to="/products/all" className="link">
          All Cakes
        </NavLink>
        <Dropdown menu={{ items }}>
          <NavLink style={{ padding: "0px 20px" }}>
            <Space className="link">
              Cake Events <AiOutlineDown />
            </Space>
          </NavLink>
        </Dropdown>
        <NavLink to="/aboutUs" className="link">
          About Us
        </NavLink>
      </div>
      <div className="search">
        <input type="text" placeholder="Smart Search" />
        <AiOutlineSearch size={30} color="#000" className="seacrh-icon" />
      </div>
      <div className="cart ">
        <NavLink to="cart">
          <Badge badgeContent={4} color="error">
            <AiOutlineShopping size={25} color="#fff" />
          </Badge>
        </NavLink>
      </div>
    </nav>
  );
}

export default Header;
