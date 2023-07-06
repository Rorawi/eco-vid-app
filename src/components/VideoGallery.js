import React, { useState } from "react";
import styles from "../components/videogallery.module.css";
import { Details } from "./details";
import ReactPlayer from "react-player";
import { GoPerson, GoClock } from "react-icons/go";
import Modal from "./Modal";
// import SingleVideo from "./SingleVideo";
// import { Link } from "react-router-dom";
// import Navbar from "./Navbar";
import { FaSearch, FaTimes } from "react-icons/fa";
import Navbar from "./Navbar";

function VideoGallery() {
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const openModal = (selectedModal) => {
    setSelectedVideo(selectedModal);
    setModal(true);
  };

  const searchFunc = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  return (
    <>
    {/* <Navbar search={searchFunc}/> */}
      <div className="basis-[45%] w-[100%]">
        <input
          type="text"
          className="border-2 border-red-700 w-[100%] max-w-[500px] rounded-full"
          onChange={searchFunc}
        />
        <FaSearch />
      </div>
      {modal && selectedVideo && (
        /*The error: In the details the video has the object name of "vid" 
        and I mistakenly imported it as "video"*/
        <>
          <Modal
            title={selectedVideo.title}
            vid={selectedVideo.vid}
            click={modal.onClick}
          />

          {/* <SingleVideo
          title={selectedVideo.title}
          vid={selectedVideo.vid}
          click={modal.onClick}
        /> */}
        </>
      )}

      <h2>All Genres</h2>
      <div className="flex justify-center items-center flex-wrap">
        {Details.filter((item) => {
          if (search == "") {
            return item;
          } else if (item.level.toLowerCase().includes(search.toLowerCase())) {
            return item;
          }
        }).map((detail, index) => {
          // <Link to="/singlevideo">
          return (
            <>
              <div
                className="bg-white w-[350px] h-[300px] m-[15px] overflow-hidden rounded-md shadow-md"
                onClick={() => openModal(detail)}
                key={index}
              >
                <div className="relative">
                  <div className="relative w-[350px] h-[200px] flex justify-center items-center overflow-hidden cursor-pointer">
                    {/* <img src={detail.img}/> */}
                    <video
                      className="absolute w-[102%] h-[102%] duration-300 ease-in"
                      muted
                      loop
                      controls={true}
                    >
                      <source src={detail.vid} type="video/mp4" />
                    </video>
                  </div>
                  <p
                    className="text-[#222] text-[0.9em] font-bold h-[65px] p-[10px] cursor-pointer"
                    title="A music video of Arrdee and Aitch - War"
                  >
                    {detail.title}
                  </p>
                  <div className="flex justify-between mx-[10px] text-[0.75em]">
                    <a href="" className="text-[#555] flex items-center">
                      <GoPerson />
                      Ethel
                    </a>
                    <span className="text-[#555] flex items-center">
                      <GoClock />
                      <h1>5 days ago</h1>
                    </span>
                  </div>
                </div>
              </div>
            </>
          );
        })}
        {/* </Link> */}
      </div>
    </>
  );
}

export default VideoGallery;
