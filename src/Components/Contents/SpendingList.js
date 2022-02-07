import React, { useContext } from "react";
import { spendingContext } from "../../Context/index";

function SpendingList(props) {
  const { handleHidden, setDetail } = useContext(spendingContext);

  const handleShowDetail = () => {
    let data = [
      {
        type: "fitness",
        wallet: "coffe",
        date: "22/12/2022",
        amout: 22000,
      },
    ];
    handleHidden();
    setDetail(data);
  };

  return (
    <>
      <div className="flex flex-col w-[inherit] h-fit mt-[10px] border-t-[32px] bg-[#fff] font-[roboto]">
        <div className="flex flex-row items-center justify-between w-[auto] mt-[8px] ml-[16px] mr-[16px] border-b-2">
          <p className="text-[36px] font-[580px] leading-[40px] text-[#333]">
            28
          </p>
          <span className="grow-[1] flex flex-col items-start justify-center ml-[14px] ">
            <p className="text-[16px] text-[#919090] font-bold leading-[14px] capitalize">
              friday
            </p>
            <p className="text-[14px] text-[#919090] leading-[14px] capitalize">
              January 2022
            </p>
          </span>
          <p className="font-bold">-60,000</p>
        </div>
        {/* spending */}
        <div
          onClick={handleShowDetail}
          className="flex flex-row items-center justify-between w-[auto] h-[68px] hover:bg-[#eff9f1] cursor-pointer"
        >
          <span className=" flex items-center justify-center text-[24px] leading-[16px] ml-[16px] h-[38px] w-[38px] ">
            <img
              className="object-cover h-[inherit] w-[inherit] rounded-full "
              src="https://res.cloudinary.com/anhnhut/image/upload/v1632123306/dev_setups/wdu5mlxgfsgqjvepgfgu.png"
              alt="xxx"
            />
          </span>
          <span className="grow-[1] flex flex-col items-start justify-center ml-[14px] ">
            <p className="text-[16px] text-[#000] font-bold leading-[14px] capitalize">
              Fitness
            </p>
          </span>
          <p className="text-red-600  mr-[16px]">-25,000</p>
        </div>
      </div>
    </>
  );
}

export default SpendingList;
