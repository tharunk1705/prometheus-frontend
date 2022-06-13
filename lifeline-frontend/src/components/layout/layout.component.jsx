import { Route, Routes } from "react-router-dom";
import Home from "../../routes/home/home.route";
import Navbar from "../navbar/navbar.component";

import "./layout.styles.css";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="routes ">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
};

export default Layout;
