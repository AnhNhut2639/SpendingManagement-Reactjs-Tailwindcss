import React from "react";

function WebLayout(props) {
  return (
    <>
      <div className="flex flex-col fixed h-[100vh] w-[5%] bg-[#ffffff] drop-shadow-2xl z-10">
        Dashboard
      </div>
      <div className="flex flex-col ">
        <div className="fixed h-[9vh] w-[100%] bg-[#fff] border-solid border-[1px] border-b-[#bebaba] z-9">
          Header
        </div>
        <div className=" flex mt-[9vh] ml-[5%] h-[90vh] w-[auto] bg-[#e4e4e4]">
          main detail
        </div>
      </div>
    </>
  );
}

export default WebLayout;
