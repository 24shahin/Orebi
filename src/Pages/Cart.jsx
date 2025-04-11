import React from "react";
import Container from "../Component/Layout/Container";
import Breadcumb from "../Component/Layout/Breadcumb";
import { ImCross } from "react-icons/im";
import itemImage from "../../public/assets/images/cartimg.png";
import { BiMinus, BiPlus } from "react-icons/bi";

function Cart() {
  return (
    <Container>
      <Breadcumb />
      <div className="border border-bordercolor  ">
        <div className="bg-white ">
          <div className="flex items-center bg-[#f3f3f3] ">
            <h3 className="w-4/12 py-8 pl-5 text-base font-bold text-tcolor">
              Product
            </h3>
            <h3 className="w-2/12 py-8 text-base font-bold text-tcolor">
              Price
            </h3>
            <h3 className="w-3/12 py-8 text-base font-bold text-tcolor">
              Quantity
            </h3>
            <h3 className="w-3/12 py-8 text-base font-bold text-tcolor">
              Total
            </h3>
          </div>
          {/* cart product map below */}
          <div className="flex items-center py-5">
            <div className="flex w-4/12 items-center gap-x-5">
              <div className="ml-5 cursor-pointer">
                <ImCross />
              </div>
              <img src={itemImage} alt="" className="ml-5 w-[120px]" />
              <h2 className="text-base font-bold text-tcolor">Product name</h2>
            </div>
            <div className="w-2/12 ">
              <h3 className="text-[20px] font-bold text-tcolor">$44</h3>
            </div>
            <div className="w-3/12">
              <div className="flex h-9 w-[140px] border border-bordercolor">
                <h4 className="inset-shadow-sm inset-shadow-indigo-500  flex w-1/3 cursor-pointer items-center justify-center border-r border-transparent text-base text-t2color transition-all duration-150 ease-linear hover:border-bordercolor hover:shadow-xl hover:shadow-[#f3f3f3]">
                  <BiMinus />
                </h4>
                <h4 className="flex w-1/3 cursor-pointer items-center justify-center px-8 text-base text-t2color">
                  1
                </h4>
                <h4 className="inset-shadow-sm inset-shadow-indigo-500  flex w-1/3 cursor-pointer items-center justify-center border-l border-transparent text-base text-t2color transition-all duration-150 ease-linear hover:border-bordercolor hover:shadow-xl hover:shadow-[#f3f3f3]">
                  <BiPlus />
                </h4>
              </div>
            </div>
            <div className="w-3/12">
              <h3 className="text-[20px] font-bold text-tcolor">$44</h3>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Cart;
