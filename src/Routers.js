import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OtherPage from "./components/OtherPage";
import WholeWeb from "./components/WholeWeb";
import Navbar from "./components/Navbar";

const Routers = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<WholeWeb />} />
        <Route path="/otherpage" element={<OtherPage />} />
      </Routes>
    </Router>
  );
};

export default Routers;
