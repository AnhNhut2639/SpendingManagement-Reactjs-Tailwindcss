import React from "react";
import { BsCalendar } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import { MdRemoveRedEye } from "react-icons/md";
import ReactTooltip from "react-tooltip";

function Header(props) {
  let newDate = new Date();
  let date = newDate.getDate();
  return (
    <>
      <div className="flex flex-row justify-between items-center  ml-[5%]  w-[auto] h-[100%] ">
        <div className="flex flex-row h-[100%] w-[50%] items-center flex-shrink-0 ">
          <div className="flex items-center justify-center h-[100%] w-[60px] ml-6 rounded-[100%] ">
            <img
              className="object-cover h-16 "
              src="https://res.cloudinary.com/anhnhut/image/upload/v1632497919/dev_setups/hqrc5ukexlyfurff9jz3.png"
              alt="eternal"
            />
          </div>
          <div className="flex flex-col justify-items-end mt-6 h-[100%] w-[55%]">
            <span className="flex justify-items-start items-center text-[12px] text-[black leading-[21px]">
              Total
            </span>
            <span className="flex justify-items-start items-center font-bold text-[14px] leading-[18px]">
              +2.000.000 đ
            </span>
          </div>
        </div>

        <div className=" flex flex-row items-center justify-end pr-[20px] w-[50%] h-[100%]  text-xl text-[#797979] ">
          <button
            className="flex items-center h-[48px] w-[48px] hover:text-[#000]"
            data-tip=""
            data-for="calendar"
          >
            <div>
              <BsCalendar size="20px" />
            </div>
            <span className="text-[12px] leading-[20px] mt-[5px] ml-[2px] font-semibold absolute text-center">
              {date}
            </span>
          </button>
          <button
            className=" h-[48px] w-[48px] hover:text-[#000]"
            data-tip=""
            data-for="transaction"
          >
            <MdRemoveRedEye />
          </button>
          <button
            className="pr-[42px] h-[48px] w-[48px] hover:text-[#000]"
            data-tip=""
            data-for="search"
          >
            <GoSearch />
          </button>

          <button className="text-[14px] bg-[#1aa333] hover:bg-[#34be4d] text-[#ffffff] font-medium leading-[16px] w-[150px] h-[32px] rounded-[4px] font-[sans-serif]">
            ADD TRANSACTION
          </button>
        </div>
      </div>
      {/* tooltip */}
      <ReactTooltip id="calendar" place="bottom" effect="solid">
        Jump to today
      </ReactTooltip>
      <ReactTooltip id="search" place="bottom" effect="solid">
        Search
      </ReactTooltip>
      <ReactTooltip id="transaction" place="bottom" effect="solid">
        View by transaction
      </ReactTooltip>
    </>
  );
}

export default Header;
