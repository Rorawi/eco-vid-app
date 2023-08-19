import React, { useState,useEffect } from "react";
import { Details } from "./details";
import { GoPerson, GoClock } from "react-icons/go";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const VideoSort = () => {
  const [filter, setFilter] = useState("");
  const [modal, setModal] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  const navigation = useNavigate();

  const HandleDivClick = (propValue) => {
    navigation("/otherpage", { state: { propKey: propValue } });
  };
  const filteredCategory = (category) => {
    setFilter(category);
  };

  const filteredData = Details.filter((item) =>
    filter ? item.level === filter : true
  );

  const openModal = (selectedModal) => {
    setSelectedVideo(selectedModal);
    setModal(true);
  };

  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    if (scrollPosition > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
     {/* <div className={` w-[100%] py-[7px] bg-white dark:bg-[#222222] shadow-xl z-10 duration-200 font-montserrat  
     ${
        scrolled ? `fixed bg-white z-10 top-[80px]` : ""
      }`}>
     <div
        className="flex justify-evenly items-center font-montserrat h-[60px]"
      >
        <button className="px-4 py-2 bg-green-500 rounded-xl" onClick={() => filteredCategory("")}>All</button>
        <button className="px-4 py-2 bg-green-500 rounded-xl" onClick={() => filteredCategory("Easy")}>Easy</button>
        <button className="px-4 py-2 bg-green-500 rounded-xl" onClick={() => filteredCategory("Intermediate")}>
          Intermediate
        </button>
        <button className="px-4 py-2 bg-green-500 rounded-xl" onClick={() => filteredCategory("Advanced")}>Advanced</button>
      </div>
     </div> */}

      <div className="flex flex-wrap justify-center ml-[50px]">
        {filteredData.map((detail, index) => (
          <div
            className="m-[15px]"
            onClick={() => HandleDivClick(detail)}
            key={index}
          >
            <div className="relative mb-[70px]" >
              <div className="relative w-[320px] h-[200px] flex justify-center items-center cursor-pointer">
                <video
                  className="absolute w-[100%] duration-300 ease-in rounded-xl mb-5 border-2 border-green-500"
                  muted
                  loop
                  controls={true}
                >
                  <source src={detail.vid} type="video/mp4" />
                </video>
              </div>

              <div className="bg-white dark:bg-[#232323] drop-shadow-xl mt-3 py-4 w-[320px]  rounded-xl">
                <p
                  className="text-[#222] dark:text-white text-[0.9em] font-bold p-[10px] cursor-pointer font-montserrat"
                  title="A music video of Arrdee and Aitch - War"
                >
                  {detail.title}
                </p>
                <div className="flex justify-between mx-[10px] text-[0.75em] font-montserrat">
                  <a
                    href=""
                    className="text-[#555] dark:text-green-500 flex items-center"
                  >
                    <GoPerson />
                    {detail.level}
                  </a>
                  <span className="text-[#555] dark:text-green-500 flex items-center font-montserrat">
                    <GoClock />
                    <h1>{detail.name}</h1>
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default VideoSort;



