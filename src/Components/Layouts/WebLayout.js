import React from "react";
import MainContent from "../Contents/MainContent";
import Dashboard from "../Dashboard/Index";
import Header from "../Header/Header";

function WebLayout(props) {
  return (
    <>
      <div className="fixed h-[100vh] w-[5%] bg-[#ffffff] drop-shadow-2xl z-[999]">
        <Dashboard />
      </div>
      <div className="flex flex-col ">
        <div className="fixed h-[9vh] w-[100%] bg-[#fff] border-solid border-[1px] border-b-[#bebaba] z-[998]">
          <Header />
        </div>
        <div className=" mt-[9vh] ml-[5%] min-h-[100vh] w-[auto] bg-[#e4e4e4] z-[9]">
          <MainContent />
        </div>
      </div>
    </>
  );
}

export default WebLayout;
