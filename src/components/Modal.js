import React from 'react'
import styles from "../components/videogallery.module.css";
import { FaTimes } from "react-icons/fa";
import { GoPerson, GoClock } from "react-icons/go";


const Modal =({title,vid,click}) => {
    console.log(title,vid,click);
    return (
        <>
        <div className={styles["video-modal-screen"]}>
                    <FaTimes
                      className="absolute top-0 right-0 text-black/70 text-3xl my-[20px] mx-[30px] cursor-pointer"
                      onClick={click}
                    />
                    <div className="relative bg-white rounded-lg shadow-lg scale-[0.5] duration-500 ease-out">
                     <div>
                     <video
                        src={vid}
                        className="max-w-[150%] w-[100%] h-auto"
                        controls
                        autoPlay
                        loop
                      ></video>
                     </div>
                     <div className='my-[30px] mx-[30px]'>
                     <p className="text-[#222] text-[2.1rem] font-semibold py-[5px] px-[15px]">
                        {title}{" "}
                      </p>
                      <div className="flex justify-between mx-[15px] text-[1.5rem] mb-[15px]">
                        <a href="" className="text-[#555] decoration-none flex items-center">
                          <GoPerson />
                          Ethel
                        </a>
                        <span className="text-[#555] decoration-none flex items-center">
                          <GoClock />5 day ago
                        </span>
                      </div>
                     </div>


                    </div>
                  </div>
        </>
    )
}

export default Modal
