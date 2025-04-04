import React from "react";
import Flex from "./Layout/Flex";
import Container from "./Layout/Container";
import { PiNumberTwoBold } from "react-icons/pi";
import { FaTruck } from "react-icons/fa";
import { PiArrowCounterClockwiseBold } from "react-icons/pi";

function AdditionalInfo() {
  return (
    <div className="mt-[-10px] border border-[#F0F0F0]">
      <Container>
        <Flex style={"justify-between py-7"}>
          <div className="flex items-center gap-x-1 md:gap-x-4">
            <PiNumberTwoBold
              className={"text-[10px] text-tcolor md:text-base"}
            />
            <p className="text-[10px] text-[#6D6D6D] md:text-base">
              Two years warranty
            </p>
          </div>
          <div className="flex items-center gap-x-1 md:gap-x-4">
            <FaTruck className={"text-[10px] text-tcolor md:text-base"} />
            <p className="text-[10px] text-[#6D6D6D] md:text-base">
              Free shipping
            </p>
          </div>
          <div className="flex items-center gap-x-1 md:gap-x-4">
            <PiArrowCounterClockwiseBold
              className={"text-[10px] text-tcolor md:text-base"}
            />
            <p className="text-[10px] text-[#6D6D6D] md:text-base">
              Return policy in 30 days
            </p>
          </div>
        </Flex>
      </Container>
    </div>
  );
}

export default AdditionalInfo;
