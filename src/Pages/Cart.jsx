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
          <div className="flex items-center bg-[#f3f3f3] px-2 lg:px-0">
            <h3 className="w-detailWidth py-3 text-sm font-bold text-tcolor sm:text-base lg:w-4/12 lg:py-8 lg:pl-5">
              Product
            </h3>
            <h3 className="w-priceWidth py-3 text-center text-sm font-bold text-tcolor sm:text-left sm:text-base lg:w-2/12 lg:py-8">
              Price
            </h3>
            <h3 className="w-QNTWidth py-3 text-center text-sm font-bold text-tcolor sm:text-left sm:text-base lg:w-3/12 lg:py-8">
              Quantity
            </h3>
            <h3 className="w-totalWidth py-3 text-center text-sm font-bold text-tcolor sm:text-left sm:text-base lg:w-3/12 lg:py-8">
              Total
            </h3>
          </div>
          {/* cart product map below */}
          <div>
            <div className="flex items-center py-5">
              <div className="flex w-detailWidth items-center gap-x-2 lg:w-4/12 lg:gap-x-5">
                <div className="ml-5 cursor-pointer">
                  <ImCross className="text-[8px] sm:text-sm lg:text-base" />
                </div>
                <img
                  src={itemImage}
                  alt=""
                  className="w-16 lg:ml-5 lg:w-[120px]"
                />
                <h2 className="text-sm font-bold text-tcolor lg:text-base">
                  Product name
                </h2>
              </div>
              <div className="w-priceWidth text-center sm:text-left lg:w-2/12 ">
                <h3 className="text-sm font-bold text-tcolor lg:text-[20px]">
                  $44
                </h3>
              </div>
              <div className=" w-QNTWidth  lg:w-3/12">
                <div className="mx-auto flex h-9 w-[72px] border border-bordercolor sm:m-0 lg:w-[140px]">
                  <h4 className="lineShadow-r flex w-1/3 cursor-pointer items-center justify-center border-r border-transparent text-sm text-t2color transition-all duration-150 ease-linear hover:border-bordercolor lg:text-base">
                    <BiMinus />
                  </h4>
                  <h4 className="flex w-1/3 cursor-pointer items-center justify-center text-sm text-t2color lg:px-8 lg:text-base">
                    1
                  </h4>
                  <h4 className="lineShadow-l flex w-1/3 cursor-pointer items-center justify-center border-r border-transparent text-sm text-t2color transition-all duration-150 ease-linear hover:border-bordercolor lg:text-base">
                    <BiPlus />
                  </h4>
                </div>
              </div>
              <div className="w-totalWidth text-center sm:text-left lg:w-3/12">
                <h3 className="text-sm font-bold text-tcolor lg:text-[20px]">
                  $44
                </h3>
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-bordercolor p-3 lg:p-5">
              <div className="flex items-center gap-x-3 lg:gap-x-6">
                <div className="w-[120px] border border-[#eaeaea] lg:w-[255px] lg:px-5 lg:py-2.5">
                  <select className="w-full bg-transparent px-3 py-2 text-sm text-t2color lg:text-base">
                    <option
                      value=""
                      className="text-sm text-t2color lg:text-base"
                    >
                      SIZE
                    </option>
                    <option
                      value=""
                      className="text-sm text-t2color lg:text-base"
                    >
                      S
                    </option>
                    <option
                      value=""
                      className="text-sm text-t2color lg:text-base"
                    >
                      M
                    </option>
                    <option
                      value=""
                      className="text-sm text-t2color lg:text-base"
                    >
                      L
                    </option>
                    <option
                      value=""
                      className="text-sm text-t2color lg:text-base"
                    >
                      XL
                    </option>
                    <option
                      value=""
                      className="text-sm text-t2color lg:text-base"
                    >
                      XXL
                    </option>
                  </select>
                </div>
                <h3 className="cursor-pointer text-sm font-bold text-tcolor">
                  Apply coupon
                </h3>
              </div>
              <h3 className="cursor-pointer text-sm font-bold text-tcolor">
                Update cart
              </h3>
            </div>
          </div>
          {/* cart product map up */}
        </div>
      </div>
      <div className="ml-auto mt-8 w-full sm:w-[400px] lg:mt-[54px] lg:w-[646px] ">
        <div className="mb-[30px]">
          <h3 className="mb-6 text-end text-xl font-bold text-tcolor">
            Cart totals
          </h3>
          <div className="flex w-full items-center border border-bordercolor">
            <p className="w-1/2 border-r border-bordercolor px-5 py-3 text-base font-bold text-tcolor">
              Subtotal
            </p>
            <p className="w-1/2 px-5 py-3 text-base text-t2color">389.99 $</p>
          </div>
          <div className="flex w-full items-center border-b border-l border-r border-bordercolor">
            <p className="w-1/2 border-r border-bordercolor px-5 py-3 text-base font-bold text-tcolor">
              Total
            </p>
            <p className="w-1/2 px-5 py-3 text-base text-tcolor">389.99 $</p>
          </div>
        </div>
        <div className="text-end">
          <button className="h-9 w-[200px] border border-[#2b2b2b] bg-tcolor font-bold text-white transition-all duration-200 ease-linear hover:bg-white hover:text-tcolor lg:h-[50px]">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </Container>
  );
}

export default Cart;
