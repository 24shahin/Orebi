import React from "react";
import Container from "../Component/Layout/Container";
import Breadcumb from "../Component/Layout/Breadcumb";
import Flex from "../Component/Layout/Flex";
import Image from "../Component/Layout/Image";
import { Link } from "react-router-dom";
import about1 from "../../public/assets/images/about1.png";
import about2 from "../../public/assets/images/about2.png";

function About() {
  return (
    <Container>
      <Breadcumb />
      <Flex style={"gap-x-10"}>
        <div className="relative w-1/2">
          <Link to="#">
            <Image link={about2} style={"w-full"} />
          </Link>
          <button className="absolute bottom-0 left-1/2 -mb-5 h-12 w-32 -translate-x-1/2 bg-tcolor text-white md:mb-[40px] md:h-[76px] md:w-[281px]">
            Our Brand
          </button>
        </div>
        <div className="relative w-1/2">
          <Link to="#">
            <Image link={about1} style={"w-full"} />
          </Link>
          <button className="absolute bottom-0 left-1/2 -mb-5 h-12 w-32 -translate-x-1/2 bg-tcolor text-white md:mb-[40px] md:h-[76px] md:w-[281px]">
            Our Stores
          </button>
        </div>
      </Flex>
      <p className="my-14 text-2xl font-normal leading-relaxed text-tcolor lg:mb-[118px] lg:mt-32 lg:text-[39px]">
        Orebi is one of the world’s leading ecommerce brands and is
        internationally recognized for celebrating the essence of classic
        Worldwide cool looking style.
      </p>
      <Flex
        style={
          "justify-between gap-x-10 flex-col md:flex-row lg:gap-y-0 gap-y-8"
        }
      >
        <div className="w-full lg:w-1/3">
          <h3 className="mb-2.5 text-2xl font-bold text-tcolor">Our Vision</h3>
          <p className="text-base font-normal text-t2color">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="w-full lg:w-1/3">
          <h3 className="mb-2.5 text-2xl font-bold text-tcolor">Our Story</h3>
          <p className="text-base font-normal text-t2color">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic.
          </p>
        </div>
        <div className="w-full lg:w-1/3">
          <h3 className="mb-2.5 text-2xl font-bold text-tcolor">Our Brands</h3>
          <p className="text-base font-normal text-t2color">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley.
          </p>
        </div>
      </Flex>
    </Container>
  );
}

export default About;
