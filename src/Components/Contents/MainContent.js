import React, { useContext } from "react";
import TabUI from "./TabUI";
import { spendingContext } from "../../Context/index";
import DetailSpending from "./DetailSpending";

function MainContent(props) {
  const { isHidden } = useContext(spendingContext);

  return (
    <>
      <div className="flex flex-row justify-center mt-[32px] w-[auto] transition ease-in-out delay-150">
        <div className="w-[582px] min-h-[679px] ml-[20px] mr-[16px] font-[roboto]  bg-[#fff] rounded-lg drop-shadow-2xl">
          <TabUI />
        </div>
        <div
          className={`sticky top-[60px] w-[814px] h-fit bg-[#fff] rounded-lg drop-shadow-2xl ${
            isHidden && "hidden"
          }`}
        >
          <DetailSpending />
        </div>
      </div>
    </>
  );
}

export default MainContent;
