import React from "react";
import {
  FaBookOpen,
  FaChartArea,
  FaChevronRight,
  FaListAlt,
  FaRegCalendarAlt,
  FaRegChartBar,
  FaRegSun,
  FaStickyNote,
  FaTable,
  FaTachometerAlt,
  FaWrench,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="bg-[#212529] h-screen px-[25px]">
      <div className="px-[15px] py-[30px] flex items-center justify-center border-b-[1px] border-[#EDEDED]/[0.3]">
        <h1 className="text-white text-[20px] leading-[24px] font-extrabold cursor-pointer">
          MrEngineer
        </h1>
      </div>
      <div className="pt-[15px] border-b-[1px] border-[#EDEDED]/[0.3]">
        <p className="text-[10px] font-extrabold leading-[16px] text-white/[0.4]">
          CORE
        </p>
        <div className="flex items-center gap-[15px] py-[20px] border-b-[1px] border-[#EDEDED]/[0.3]">
          <FaTachometerAlt color="white" />
          <p className="text-[14px] leadimg-[20px] font-bold text-white">
            Dashboard
          </p>
        </div>
      </div>
      <div className="pt-[15px] border-b-[1px] border-[#EDEDED]/[0.3]">
        <p className="text-[10px] font-extrabold leading-[16px] text-white/[0.4]">
          INTERFACE
        </p>
        <div className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer">
          <div className="flex items-center gap-[10px]">
            <FaListAlt color="white" />
            <p className="text-[14px] leading-[20px] font-normal text-white">
              Layouts
            </p>
          </div>
          <FaChevronRight color="white" />
        </div>
        <div className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer">
          <div className="flex items-center gap-[10px]">
            <FaBookOpen color="white" />
            <p className="text-[14px] leading-[20px] font-normal text-white">
              Pages
            </p>
          </div>
          <FaChevronRight color="white" />
        </div>
      </div>

      <div className="pt-[15px] ">
        <p className="text-[10px] font-extrabold leading-[16px] text-white/[0.4]">
          ADDONS
        </p>
        <div className="flex items-center gap-[10px] py-[15px]">
          <FaChartArea color="white" />
          <p className="text-[14px] leading-[20px] font-normal text-white">
            <a className="no-underline text-white" href="/charts">
              Charts
            </a>
          </p>
        </div>
        <div className="flex items-center gap-[10px] py-[15px]">
          <FaTable color="white" />
          <p className="text-[14px] leading-[20px] font-normal text-white">
            <a className="no-underline text-white" href="/tables">
              Tables
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
