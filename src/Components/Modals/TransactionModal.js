import React from "react";
import ReactDOM from "react-dom";

const TransactionModal = ({ isShowing, hide }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="inset-0 bg-black opacity-[0.7] fixed w-[100%] h-[100%] z-[1000] flex items-center justify-center">
            <div className="text-[#000] w-[848px] h-[auto] bg-[#fff] z-[1002]">
              <div className="w-[auto] h-[64px] text-[20px] font-semibold leading-[24px] flex flex-wrap pl-[40px] items-center border-b-4">
                Add transaction
              </div>
              {/* input */}
              <div className="w-[inherit] h-[240px]">
                <div className="mt-[24px] ml-[40px]  flex ">
                  <div className="border-2 rounded-lg border-solid w-[240px] h-[64px] mr-[24px]">
                    <p>Wallet</p>
                  </div>
                  <div className="border-2 rounded-lg  border-solid w-[240px] h-[64px] mr-[24px]">
                    <p>Caterogy</p>
                  </div>
                  <div className="border-2 rounded-lg  border-solid w-[240px] h-[64px] mr-[24px]">
                    <p>Amout</p>
                    <input
                      type="Number"
                      className="w-[195px] h-[32px] outline-none"
                    />
                  </div>
                </div>
                <div className="mt-[24px] ml-[40px]  flex">
                  <div className="border-2 rounded-lg border-solid w-[240px] h-[64px] mr-[24px]">
                    <p>Date</p>
                  </div>
                  <div className="border-2 rounded-lg border-solid w-[504px] h-[64px] mr-[24px]">
                    <p>Note</p>
                    <input
                      type="text"
                      placeholder="Note"
                      className="w-[195px] h-[32px] outline-none"
                    />
                  </div>
                </div>
              </div>
              {/* end input */}
              <div className="w-[inherit] h-[64px] flex flex-row items-center justify-end">
                <button
                  onClick={hide}
                  className="uppercase w-[96px] h-[36px] mr-[16px] bg-[#f0f0f0] hover:bg-[#acf3be] text-green-500 rounded-[4px] text-[14px]"
                >
                  cancel
                </button>
                <button className="uppercase w-[96px] h-[36px] mr-[40px] bg-[#2db84c] text-white rounded-[4px] text-[14px]">
                  save
                </button>
              </div>
            </div>
            <div
              onClick={hide}
              className="inset-0 bg-black fixed w-[100%] h-[100%] z-[1001] flex items-center justify-center"
            ></div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default TransactionModal;
