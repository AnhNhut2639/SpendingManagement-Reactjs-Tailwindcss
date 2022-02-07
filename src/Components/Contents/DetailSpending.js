import React, { useContext } from "react";
import { spendingContext } from "../../Context/index";
import { MdOutlineCancel } from "react-icons/md";

function DetailSpending(props) {
  // testing .......
  const { handleHidden } = useContext(spendingContext);
  return (
    <>
      <div className="min-h-[254px]">
        <div className="flex flex-row items-center justify-between min-h-[64px] border-b-2 leading-[21px]">
          <div className="grow h-[inherit] flex flex-row ml-[40px] items-center">
            <MdOutlineCancel
              size="24px"
              onClick={handleHidden}
              className="cursor-pointer text-[#969696] hover:text-black"
            />
            <span className="ml-[26px] font-semibold text-[20px] leading-[24px] ">
              Transaction details
            </span>
          </div>
          <div className="h-[inherit] grow flex flex-row items-center justify-end mr-[32px] font-sans leading-[16px] text-[14px]">
            <button className="uppercase hover:bg-[#ffbaba] text-[red] w-[80px] h-[36px]">
              delete
            </button>
            <button className="uppercase hover:bg-[#eff9f1] text-[green] w-[80px] h-[36px]">
              edit
            </button>
          </div>
        </div>
        <div className="flex flex-row ml-14 mt-3">
          <span className=" flex items-center justify-center text-[24px] leading-[16px] ml-[16px] mt-1 h-[50px] w-[50px] ">
            <img
              className="object-cover h-[inherit] w-[inherit] rounded-full "
              src="https://res.cloudinary.com/anhnhut/image/upload/v1632123306/dev_setups/wdu5mlxgfsgqjvepgfgu.png"
              alt="xxx"
            />
          </span>
          <div className="flex flex-col ml-4 font-[robotp] justify-start items-start ">
            <span className="capitalize  text-[26px] leading-[32px]">
              fitness
            </span>
            <span className="capitalize text-[16px] leading-[24px]">
              wallet
            </span>
            <span className="capitalize text-[14px] leading-[24px] text-[#3a3a3a] pb-2 border-b-2">
              Friday, 28/01/2022
            </span>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start text-[34px] text-[#e51c23] leading-[48px] ml-36 mt-2  ">
          -25,000.00
        </div>
      </div>
    </>
  );
}

export default DetailSpending;
