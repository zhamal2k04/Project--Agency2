import React from "react";
import MyNavbar from "../MyNavbar/MyNavbar";
import MyFooter from "../MyFooter/MyFooter";

const MyLayout = ({ children }) => {
  return (
    <div>
      <MyNavbar />
      <div style={{ padding: "2rem" }}></div>
      {children}
      <MyFooter />
    </div>
  );
};

export default MyLayout;
