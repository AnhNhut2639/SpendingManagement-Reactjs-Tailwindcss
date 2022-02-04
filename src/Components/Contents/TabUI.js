import React from "react";
import "tw-elements";
import SpendingList from "./SpendingList";

function TabUI(props) {
  return (
    <>
      <ul
        className="sticky top-[60px] nav nav-tabs bg-[#fff]  flex flex-col md:flex-row flex-wrap list-none border-b-[1px] pl-0 mb-4
        text-[14px] font-medium leading-[16px] 
        "
        id="tabs-tabFill"
        role="tablist"
      >
        <li className="nav-item flex-auto text-center" role="presentation">
          <a
            href="#tabs-lastmonth"
            className="
      nav-link
      w-full
      block
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      mt-[15px]
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent   
    "
            id="tabs-home-tabFill"
            data-bs-toggle="pill"
            data-bs-target="#tabs-lastmonth"
            role="tab"
            aria-controls="tabs-lastmonth"
            aria-selected="true"
          >
            last month
          </a>
        </li>
        <li className="nav-item flex-auto text-center " role="presentation">
          <a
            href="#tabs-thismonth"
            className="
      nav-link
      w-full
      block
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      mt-[15px]
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
      active 
    "
            id="tabs-profile-tabFill"
            data-bs-toggle="pill"
            data-bs-target="#tabs-thismonth"
            role="tab"
            aria-controls="tabs-thismonth"
            aria-selected="false"
          >
            this month
          </a>
        </li>
        <li className="nav-item flex-auto text-center" role="presentation">
          <a
            href="#tabs-future"
            className="
      nav-link
      w-full
      block
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      mt-[15px]
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    "
            id="tabs-messages-tabFill"
            data-bs-toggle="pill"
            data-bs-target="#tabs-future"
            role="tab"
            aria-controls="tabs-future"
            aria-selected="false"
          >
            future
          </a>
        </li>
      </ul>
      <div className="flex flex-col w-[inherit] h-[143px] text-[17px] leading-[16px]">
        <div className="flex flex-row items-center justify-between px-[8px] py-[16px] h-[32px]">
          <p>Inflow</p>
          <p className="text-[#58bdee]">+2,000,000</p>
        </div>
        <div className="flex flex-row items-center justify-between px-[8px] py-[16px] h-[32px]">
          <p>Outflow</p>
          <p className="text-red-600">-233,000</p>
        </div>
        <div className="flex flex-row items-center justify-between px-[8px] py-[16px] h-[32px]">
          <p></p>
          <p className="text-[#333]   w-[-16px]">+1,767,000</p>
        </div>
        <div className="items-center uppercase text-[#2db84c] leading-[21px] font-medium cursor-pointer ">
          View report for this period
        </div>
      </div>

      <div className="tab-content" id="tabs-tabContentFill">
        <div
          className="tab-pane fade"
          id="tabs-lastmonth"
          role="tabpanel"
          aria-labelledby="tabs-home-tabFill"
        >
          Last month
        </div>
        <div
          className="tab-pane fade show active"
          id="tabs-thismonth"
          role="tabpanel"
          aria-labelledby="tabs-profile-tabFill"
        >
          <SpendingList />
        </div>
        <div
          className="tab-pane fade"
          id="tabs-future"
          role="tabpanel"
          aria-labelledby="tabs-future-tabFill"
        >
          Future
        </div>
      </div>
    </>
  );
}

export default TabUI;
