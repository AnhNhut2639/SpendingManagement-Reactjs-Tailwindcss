import React from "react";
import TabUI from "./TabUI";

function MainContent(props) {
  return (
    <>
      <div className="flex flex-row justify-center mt-[32px] w-[auto]">
        <div className="w-[582px] h-[679px] ml-[20px] mr-[16px] bg-[#fff] rounded-lg drop-shadow-2xl">
          <TabUI />
        </div>
        <div className="sticky top-[60px] w-[814px] h-fit bg-[#fff] rounded-lg drop-shadow-2xl    ">
          Detail
        </div>
      </div>
    </>
  );
}

export default MainContent;
