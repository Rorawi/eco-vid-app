import React, { useState,useEffect } from "react";
import { Details } from "./details";
import { GoPerson, GoClock } from "react-icons/go";

export default function SideVideos({vid})
 {
  return (
    <>
    <div className="md:w-[402px]">
      <video src={vid} className="w-[100%] rounded-md"/> 

      <br/>
      <br/>
    {Details.map((detail)=> {
      return(
        <div className="mb-[70px] flex items-start" >
        <div className="w-[200px] h-[100px] flex justify-center items-center cursor-pointer">
         <img src={detail.img} className="w-[100%] duration-300 ease-in rounded-xl mb-5 border-2 border-green-500"
/>
        </div>

        <div className="p-[10px] w-[200px]">
          <p
            className="text-[#222] dark:text-white text-[0.7em] font-bold  cursor-pointer font-montserrat"
            title={detail.title}
          >
            {detail.title}
          </p>
          <div className="text-[0.5em] font-montserrat flex justify-between">
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
      )
    })}
    </div>
    </>
  )
}
