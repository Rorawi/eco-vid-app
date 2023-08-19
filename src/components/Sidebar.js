import React from "react";
import {
  AiOutlineHome,
  AiOutlineInbox,
  AiOutlineCalendar,
} from "react-icons/ai";
import { RiSettings3Line } from "react-icons/ri";
import { IoMdContacts } from "react-icons/io";

const Sidebar = ({ showNav }) => {
  return (
    <>
      {showNav ? (
        <div
          className={`bg-[#d2d2d2] dark:bg-[#25932b] text-gray-200 w-[20%] fixed h-[100%] mt-[80px] -translate-x-1 ${
            showNav ? `transition transform translate-x-1 duration-100` : ""
          }`}
        >
          <div className="flex flex-col space-y-4 mt-4">
            {/* Sidebar Links */}
            <div className="flex items-center p-3 hover:bg-gray-700">
              <AiOutlineHome className="mr-2" />
              <span>Home</span>
            </div>
            <div className="flex items-center p-3 hover:bg-gray-700">
              <AiOutlineInbox className="mr-2" />
              <span>Inbox</span>
            </div>
            <div className="flex items-center p-3 hover:bg-gray-700">
              <AiOutlineCalendar className="mr-2" />
              <span>Calendar</span>
            </div>
            <div className="flex items-center p-3 hover:bg-gray-700">
              <RiSettings3Line className="mr-2" />
              <span>Settings</span>
            </div>
            <div className="flex items-center p-3 hover:bg-gray-700">
              <IoMdContacts className="mr-2" />
              <span>Contacts</span>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Sidebar;
