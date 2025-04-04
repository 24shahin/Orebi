import React, { useEffect, useRef, useState } from "react";
import Container from "./Layout/Container";
import Flex from "./Layout/Flex";
import { FaBars } from "react-icons/fa6";
import Dropdown from "./Layout/Dropdown";
import List from "./Layout/List";
import Listitmem from "./Layout/Listitmem";
import Search from "./Layout/Search";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import { GoTriangleDown } from "react-icons/go";
import { ImCross } from "react-icons/im";
import Image from "./Layout/Image";
import { Link } from "react-router-dom";
import CartImage from "../../public/assets/images/cartimg.png";

function Header() {
  const [catagoryShow, SetCatagoryShow] = useState(false);
  const [userShow, SetUserShow] = useState(false);
  const [cartShow, SetCartShow] = useState(false);
  const menuref = useRef();
  const userref = useRef();
  const cartref = useRef();
  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (menuref.current.contains(e.target)) {
        SetCatagoryShow(true);
      } else {
        SetCatagoryShow(false);
      }
    });
    document.body.addEventListener("click", (e) => {
      if (userref.current.contains(e.target)) {
        SetUserShow(true);
      } else {
        SetUserShow(false);
      }
    });
    document.body.addEventListener("click", (e) => {
      if (cartref.current.contains(e.target)) {
        SetCartShow(true);
      } else {
        SetCartShow(false);
      }
    });
  }, []);
  return (
    <div className="relative z-50 bg-[#f3f3f3]">
      <Container>
        <Flex style="justify-between py-4 lg:py-10 items-center">
          <div className="">
            <Dropdown dropref={menuref} style="relative">
              <p className="flex cursor-pointer items-center gap-x-2 text-sm text-tcolor">
                {<FaBars />}{" "}
                <span className="hidden lg:inline-block">Shop by Catagory</span>
              </p>
              {catagoryShow && (
                <List style="w-[150px] lg:w-[263px] bg-tcolor text-white absolute top-[46px] lg:top-[78px] left-0 cursor-pointer">
                  <Listitmem style="py-2 lg:py-4 pl-2 lg:pl-5 inline-block text-[#ffffffb3] hover:text-white hover:text-bold hover:pl-2.5 duration-300 lg:hover:pl-8 border-[#D8D8D8] border-b w-full text-sm">
                    Accesories
                  </Listitmem>
                  <Listitmem style="py-2 lg:py-4 pl-2 lg:pl-5 inline-block text-[#ffffffb3] hover:text-white hover:text-bold hover:pl-2.5 duration-300 lg:hover:pl-8 border-[#D8D8D8] border-b w-full text-sm">
                    Furniture
                  </Listitmem>
                  <Listitmem style="py-2 lg:py-4 pl-2 lg:pl-5 inline-block text-[#ffffffb3] hover:text-white hover:text-bold hover:pl-2.5 duration-300 lg:hover:pl-8 border-[#D8D8D8] border-b w-full text-sm">
                    Electronics
                  </Listitmem>
                  <Listitmem style="py-2 lg:py-4 pl-2 lg:pl-5 inline-block text-[#ffffffb3] hover:text-white hover:text-bold hover:pl-2.5 duration-300 lg:hover:pl-8 border-[#D8D8D8] border-b w-full text-sm">
                    Clothes
                  </Listitmem>
                  <Listitmem style="py-2 lg:py-4 pl-2 lg:pl-5 inline-block text-[#ffffffb3] hover:text-white hover:text-bold hover:pl-2.5 duration-300 lg:hover:pl-8 border-[#D8D8D8] border-b w-full text-sm">
                    Bags
                  </Listitmem>
                  <Listitmem style="py-2 lg:py-4 pl-2 lg:pl-5 inline-block text-[#ffffffb3] hover:text-white hover:text-bold hover:pl-2.5 duration-300 lg:hover:pl-8 border-[#D8D8D8] border-b w-full text-sm">
                    Home appliances
                  </Listitmem>
                </List>
              )}
            </Dropdown>
          </div>
          <div className="relative">
            <Search
              style="w-[180px] placeholder:text-sm lg:w-[601px] p-2 lg:py-4 lg:pl-5 palceholder:text-[#C4C4C4]"
              placeholder={"Search Products"}
            />
            <FaSearch className="absolute right-3 top-3 cursor-pointer lg:top-5" />
          </div>
          <div className="">
            <Flex style="lg:gap-x-10 gap-x-3 items-center">
              <div className="">
                <Dropdown
                  dropref={userref}
                  style="relative flex items-center cursor-pointer"
                >
                  <FaUser />
                  <GoTriangleDown />
                  {userShow && (
                    <List style="w-[150px] lg:w-[263px] bg-tcolor text-white absolute top-[32px] lg:top-8 right-0">
                      <Listitmem style="text-center py-2.5 lg:py-4 inline-block text-tcolor hover:text-white hover:bg-tcolor bg-white duration-300 hover: w-full text-sm font-bold border-[#f0f0f0] border hover:border-tcolor">
                        My Account
                      </Listitmem>
                      <Listitmem style="text-center py-2.5 lg:py-4 inline-block text-tcolor hover:text-white hover:bg-tcolor bg-white duration-300 hover: w-full text-sm font-bold border-[#f0f0f0] border hover:border-tcolor">
                        Log Out
                      </Listitmem>
                    </List>
                  )}
                </Dropdown>
              </div>
              <div className="relative ">
                <Dropdown dropref={cartref}>
                  <FaShoppingCart className="cursor-pointer text-xl" />
                  {cartShow && (
                    <div className="absolute right-0 top-[32px] w-[280px] border border-[#F0F0F0] bg-white lg:top-8 lg:w-[360px]">
                      <div className="bg-[#F5F5F3] p-5">
                        <Flex style={"items-center justify-between"}>
                          <div className="w-1/3">
                            <Image link={CartImage} />
                          </div>
                          <div className="ml-3 w-5/6 lg:ml-4">
                            <h3>Black Smart Watch</h3>
                            <p className="mt-3">$44.00</p>
                          </div>
                          <p className="flex w-1/6 cursor-pointer justify-end">
                            <ImCross />
                          </p>
                        </Flex>
                      </div>
                      <div className="px-5">
                        <h3 className="my-3.5 text-[#767676]">
                          Subtotal:{" "}
                          <span className="font-bold text-tcolor">$44.00</span>
                        </h3>
                      </div>
                      <Flex style={"justify-between mx-5 mb-5"}>
                        <Link
                          to="#"
                          className="inline-block w-[110px] border border-[#2B2B2B] py-2.5 text-center text-sm font-bold lg:w-[148px] lg:py-4"
                        >
                          View Cart
                        </Link>
                        <Link
                          to="#"
                          className="inline-block w-[110px] border border-[#2B2B2B] bg-tcolor py-2.5 text-center text-sm font-bold text-white lg:w-[148px] lg:py-4"
                        >
                          Checkout
                        </Link>
                      </Flex>
                    </div>
                  )}
                </Dropdown>
              </div>
            </Flex>
          </div>
        </Flex>
      </Container>
    </div>
  );
}

export default Header;
