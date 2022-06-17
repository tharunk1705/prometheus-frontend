import { Route, Routes } from "react-router-dom";
import Fallback from "../../routes/fallback/fallback.route";
import Home from "../../routes/home/home.route";
import SignIn from "../../routes/signin/signin.route";
import Signup from "../../routes/signup/signup.route";
import Navbar from "../navbar/navbar.component";

import "./layout.styles.css";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="routes ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="*" element={<Fallback />} />
        </Routes>
      </div>
    </>
  );
};

export default Layout;
