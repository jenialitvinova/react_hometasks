import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="wrapper flex-elem">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
