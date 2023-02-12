import React from "react";
import Navigation from "../Navigation";

// import '../../styles/Layout.modules.css';

const Layout = ({ children }) => {
  return (
    <div>
      <Navigation />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
