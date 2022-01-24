import React from "react";
import { FcMenu } from "react-icons/fc";
import {
  MdCollectionsBookmark,
  MdAccountBalanceWallet,
  MdLocalGroceryStore,
} from "react-icons/md";
import { ImDatabase } from "react-icons/im";
import { IoMdHelpCircle } from "react-icons/io";
import { BiLinkExternal } from "react-icons/bi";

function Index(props) {
  // waiting change tag a to Link(react-router-dom)
  return (
    <>
      <div className="flex flex-col items-center h-[100%] ">
        <div className="flex flex-col justify-center items-center  h-[9%] w-[100%] hover:bg-[#e4e4e4] leading-[21px]">
          <FcMenu size="23px" />
        </div>
        <div className="flex flex-col h-[30%] w-[100%] border-b-2 border-solid ">
          <a
            href="#tran"
            className="flex flex-col h-[33%] items-center justify-center text-[13px] text-[gray] hover:bg-[#e4e4e4] focus:text-[green]"
          >
            <MdAccountBalanceWallet size="25px" />
            Transactions
          </a>
          <a
            href="#report"
            className="flex flex-col h-[33%] items-center justify-center text-[13px] text-[gray] hover:bg-[#e4e4e4] focus:text-[green]"
          >
            <MdCollectionsBookmark size="25px" />
            Report
          </a>

          <a
            href="#budget"
            className="flex flex-col h-[33%] items-center justify-center text-[13px] text-[gray] hover:bg-[#e4e4e4] focus:text-[green]"
          >
            <ImDatabase size="25px" />
            Budget
          </a>
        </div>
        <div className=" flex flex-col h-[20%] w-[100%] ">
          <span className="flex flex-col h-[50%] items-center justify-center text-[13px] text-[gray] hover:bg-[#e4e4e4] focus:text-[green]">
            <MdLocalGroceryStore size="25px" />
            <p className="flex flex-row items-center justify-center">
              <span>Store</span>
              <span>
                <BiLinkExternal />
              </span>
            </p>
          </span>
          <span className="flex flex-col h-[50%] items-center justify-center text-[13px] text-[gray] hover:bg-[#e4e4e4]">
            <IoMdHelpCircle size="25px" />
            <p className="flex flex-row items-center justify-center">
              <span>Help</span>
              <span>
                <BiLinkExternal />
              </span>
            </p>
          </span>
        </div>
      </div>
    </>
  );
}

export default Index;
