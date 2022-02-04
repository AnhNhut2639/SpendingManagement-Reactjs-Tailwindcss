import React, { useState } from "react";
import TabUI from "./TabUI";

function MainContent(props) {
  const [isHidden, setIsHidden] = useState(true);
  const handleClasses = () => {
    setIsHidden(!isHidden);
  };

  return (
    <>
      <div className="flex flex-row justify-center mt-[32px] w-[auto]">
        <div className="w-[582px] min-h-[679px] ml-[20px] mr-[16px] font-[roboto]  bg-[#fff] rounded-lg drop-shadow-2xl">
          <TabUI />
        </div>
        <div
          onClick={handleClasses}
          className={`sticky top-[60px] w-[814px] h-fit bg-[#fff] rounded-lg drop-shadow-2xl ${
            isHidden && "hidden"
          }`}
        >
          Detail
        </div>
      </div>
    </>
  );
}

export default MainContent;
