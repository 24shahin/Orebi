import React, { useEffect, useState } from "react";
import Container from "./Layout/Container";
import Flex from "./Layout/Flex";
import Image from "./Layout/Image";
import List from "./Layout/List";
import Listitmem from "./Layout/Listitmem";
import { FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Logo from "../../public/assets/images/Logo.png";

export default function Navbar() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    function resize() {
      if (window.innerWidth >= 1024) {
        setShow(false);
      } else {
        setShow(true);
      }
    }
    resize();
    window.addEventListener("resize", resize);
  }, []);
  return (
    <>
      <nav className="py-3 lg:py-8">
        <Container>
          <Flex style=" flex-col lg:flex-row">
            <div className="w-full lg:w-2/12">
              <a href="/">
                <Image link={Logo} />
              </a>
            </div>
            <div className="relative z-[100] w-full lg:w-10/12">
              <FaBars
                className="absolute -top-4 right-0 cursor-pointer lg:hidden"
                onClick={() => setShow(!show)}
              />
              {!show && (
                <List style="lg:flex justify-end lg:gap-x-10 text-right bg-[#eae9e9] lg:bg-white absolute lg:relative right-0 w-full z-10 top-3 lg:top-0">
                  <Listitmem style="font-dm font-bold text-sm pr-2 lg:pr-0">
                    <Link to="/">Home</Link>
                  </Listitmem>
                  <Listitmem style="font-dm font-bold text-sm pr-2 lg:pr-0">
                    <Link to="/products">Shop</Link>
                  </Listitmem>
                  <Listitmem style="font-dm font-bold text-sm pr-2 lg:pr-0">
                    <Link to="/about">About</Link>
                  </Listitmem>
                  <Listitmem style="font-dm font-bold text-sm pr-2 lg:pr-0">
                    <Link to="/contacts">Contacts</Link>
                  </Listitmem>
                  <Listitmem style="font-dm font-bold text-sm pr-2 lg:pr-0">
                    <Link to="/journal">Journal</Link>
                  </Listitmem>
                </List>
              )}
            </div>
          </Flex>
        </Container>
      </nav>
    </>
  );
}
