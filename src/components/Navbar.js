import React, { useState, useEffect } from "react";

import { FaSearch, FaTimes ,FaMoon,FaSun} from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "../assets/images/eco-logo1.png";

const Navbar = ({ searching }) => {
  const [scrolled, setScrolled] = useState(false);
  const [show, setShow] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [search, setSearch] = useState("");
  const [theme, setTheme] = useState("Light");

  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    if (scrollPosition > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
    }

    else {
      setTheme('Light')
    }

  }, [])
  

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme == "dark" ? "Light" : "dark");
  };

  const toggleNav = () => {
    setShow(!show);
  };

  const searchFunc = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  return (
    <header
      className={` w-[100%] py-[7px] bg-white dark:bg-[#1E1E1E] z-10 duration-200	font-montserrat  ${
        scrolled ? `fixed bg-white z-10` : ""
      }`}
    >
      <nav className="flex justify-between items-center p-[25px]">
        <a href="#" className="">
          <img src={logo} alt="MWG Logo" className="w-[80px]" />
        </a>

        <div className="md:hidden" onClick={toggleNav}>
          <AiOutlineMenu className="text-black text-[25px]" />
        </div>

        <div className="flex justify-evenly basis-96">
        <div className="relative">
          <input
            type="text"
            className="border-2 border-green-500 dark:bg-[#2B2B2B] w-[100%] max-w-[10000px] outline-none rounded-full shadow-lg px-[15px] py-2 pl-[40px] font-montserrat"
            // onChange={search}
          />
          <FaSearch className="absolute left-[85%] top-[30%] transform [-translate-y-1/2] text-gray-500" />
        </div>
          <button
            className="bg-green-200 p-3 rounded-xl"
            onClick={handleThemeSwitch}
          >
            {theme == "Light"? <FaMoon /> : <FaSun />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
