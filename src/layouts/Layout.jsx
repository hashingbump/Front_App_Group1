import React from "react";
import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
import { Banner } from "../assets/Banner";
import { NavbarWithSublist } from "../assets/NavbarWithSublist";
import { Footer } from "../assets/Footer";

const Layout = () => {
  return (
    <>
      <Banner />
      <NavbarWithSublist />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
