import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OtherPage from "./components/OtherPage";
import WholeWeb from "./components/WholeWeb";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import VideoSort from "./components/Video";

const Routers = () => {
  return (
    <div >
      <Router>
      <Navbar />
      {/* <Sidebar /> */}
      <Routes>
        <Route path="/" element={<VideoSort />} />
        <Route path="/otherpage" element={<OtherPage />} />
      </Routes>
    </Router>
    </div>
  );
};

export default Routers;
