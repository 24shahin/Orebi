import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import { Link } from "react-router-dom";
import Image from "./Image";

function Advertise() {
  return (
    <div className="my-10 md:mb-[128px] md:mt-[174px]">
      <Container>
        <Flex style={"gap-5 md:gap-x-10 gap-y-5"}>
          <div className="w-2/4">
            <div className="w-full">
              <Link to="#">
                <Image
                  link="../src/assets/images/adver1.png"
                  style={"w-full"}
                />
              </Link>
            </div>
          </div>
          <div className="flex w-1/2 flex-col justify-between">
            <div className="w-full">
              {" "}
              <Link to="#">
                <Image
                  link="../src/assets/images/adver2.png"
                  style={"w-full"}
                />
              </Link>
            </div>
            <div className="w-full">
              {" "}
              <Link to="#">
                <Image
                  link="../src/assets/images/adver3.png"
                  style={"w-full"}
                />
              </Link>
            </div>
          </div>
        </Flex>
      </Container>
    </div>
  );
}

export default Advertise;
