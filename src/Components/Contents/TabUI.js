import React from "react";
import "tw-elements";

function TabUI(props) {
  return (
    <>
      <ul
        className="sticky top-[60px] nav active:text-green-600 flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4
        text-[14px] font-[roboto] font-medium leading-[16px]
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
      my-2
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
        <li className="nav-item flex-auto text-center" role="presentation">
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
      my-2
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
      my-2
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
      <div className="tab-content" id="tabs-tabContentFill">
        <div
          className="tab-pane fade show active"
          id="tabs-lastmonth"
          role="tabpanel"
          aria-labelledby="tabs-home-tabFill"
        >
          Last month
        </div>
        <div
          className="tab-pane fade"
          id="tabs-thismonth"
          role="tabpanel"
          aria-labelledby="tabs-profile-tabFill"
        >
          This month
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
