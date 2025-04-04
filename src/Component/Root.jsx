import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Root() {
  return (
    <>
      <Navbar />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Root;
