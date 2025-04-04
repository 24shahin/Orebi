import React from "react";
import Container from "./Layout/Container";
import Flex from "./Layout/Flex";
import List from "./Layout/List";
import Listitmem from "./Layout/Listitmem";
import Image from "./Layout/Image";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import FotterLogo from "../../public/assets/images/footer.png";

const Footer = () => {
  return (
    <div className="mt-16 bg-[#F5F5F3] py-8 lg:mt-36 lg:py-14">
      <Container>
        <Flex style="flex-wrap gap-y-5">
          <div className="w-1/3 lg:w-[10%]">
            <h4 className="mb-4 font-dm text-base font-bold">MENU</h4>
            <List>
              <Listitmem>
                <Link
                  to="#"
                  className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                >
                  Home
                </Link>
              </Listitmem>
              <Listitmem>
                <Link
                  to="#"
                  className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                >
                  Shop
                </Link>
              </Listitmem>
              <Listitmem>
                <Link
                  to="#"
                  className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                >
                  About
                </Link>
              </Listitmem>
              <Listitmem>
                <Link
                  t0="o"
                  className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                >
                  Contact
                </Link>
              </Listitmem>
              <Listitmem>
                <Link
                  t0="o"
                  className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                >
                  Journal
                </Link>
              </Listitmem>
            </List>
          </div>
          <div className="w-1/3 lg:w-[10%]">
            <h4 className="mb-4 font-dm text-base font-bold">SHOP</h4>
            <List>
              <Listitmem>
                <Link
                  to="#"
                  className={
                    "font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                  }
                >
                  Category 1
                </Link>
              </Listitmem>
              <Listitmem>
                <Link
                  to="#"
                  className={
                    "font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                  }
                >
                  Category 2
                </Link>
              </Listitmem>
              <Listitmem>
                <Link
                  to="#"
                  className={
                    "font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                  }
                >
                  Category 3
                </Link>
              </Listitmem>
              <Listitmem>
                <Link
                  to="#"
                  className={
                    "font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                  }
                >
                  Category 4
                </Link>
              </Listitmem>
              <Listitmem>
                <Link
                  to="#"
                  className={
                    "font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                  }
                >
                  Category 5
                </Link>
              </Listitmem>
            </List>
          </div>
          <div className="w-1/3 lg:w-[10%]">
            <h4 className="mb-4 font-dm text-base font-bold">HELP</h4>
            <List>
              <Listitmem>
                <Link
                  to="#"
                  className={
                    "font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                  }
                >
                  Privacy Policy
                </Link>
              </Listitmem>
              <Listitmem>
                <Link
                  to="#"
                  className={
                    "font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                  }
                >
                  Terms & Conditions
                </Link>
              </Listitmem>
              <Listitmem>
                <Link
                  to="#"
                  className={
                    "font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                  }
                >
                  Special E-shop
                </Link>
              </Listitmem>
              <Listitmem>
                <Link
                  to="#"
                  className={
                    "font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                  }
                >
                  Shipping
                </Link>
              </Listitmem>
              <Listitmem>
                <Link
                  to="#"
                  className={
                    "font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                  }
                >
                  Secure Payments
                </Link>
              </Listitmem>
            </List>
          </div>
          <div className="order-5 flex w-1/2 justify-center lg:order-4 lg:w-[30%]">
            <div>
              <h4 className="mb-4 font-dm text-base font-bold">
                (052) 611-5711 <br /> company@domain.com
              </h4>
              <p className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]">
                575 Crescent Ave. Quakertown, PA 18951
              </p>
            </div>
          </div>
          <div className="order-4 w-1/2 lg:order-5 lg:w-[40%]">
            <Image link={FotterLogo} />
          </div>
        </Flex>
        <Flex style={"mt-8 lg:mt-16 items-center"}>
          <div className="w-[30%] lg:w-[60%]">
            <List style={"flex gap-x-3 lg:gap-x-6"}>
              <Listitmem>
                <Link to="#">
                  <FaFacebookF />
                </Link>
              </Listitmem>
              <Listitmem>
                <Link to="#">
                  <FaLinkedinIn />
                </Link>
              </Listitmem>
              <Listitmem>
                <Link to="#">
                  <FaInstagram />
                </Link>
              </Listitmem>
            </List>
          </div>
          <div className="w-[70%] lg:w-[40%]">
            <p className="text-sm text-[#6D6D6D]">
              2020 Orebi Minimal eCommerce Figma Template by Adveits
            </p>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Footer;
