import React from "react";
import Flex from "./Layout/Flex";
import Container from "./Layout/Container";
import Headings from "./Layout/Headings";
import Product from "./Layout/Product";

function SpecialOffer() {
  return (
    <div className="mb-32 mt-[118px]">
      <Container>
        <Headings tittle={"Special Offers"} />
        <Flex style={"justify-between flex-wrap gap-y-5"}>
          <div className="mx-auto w-72 sm:w-[48%] lg:max-w-[370px] xl:w-[24%]">
            <Product
              link={"../src/assets/images/off1.png"}
              badgrTittle={"New"}
              badgeLink={true}
              overlay={false}
              brandName={"black"}
              brandColor={true}
            />
          </div>
          <div className="mx-auto w-72 sm:w-[48%] lg:max-w-[370px] xl:w-[24%]">
            <Product
              link={"../src/assets/images/off2.png"}
              badgrTittle={"New"}
              badgeLink={true}
              overlay={false}
              brandName={"black"}
              brandColor={true}
            />
          </div>
          <div className="mx-auto w-72 sm:w-[48%] lg:max-w-[370px] xl:w-[24%]">
            <Product
              link={"../src/assets/images/off3.png"}
              badgrTittle={"New"}
              badgeLink={true}
              overlay={false}
              brandName={"black"}
              brandColor={true}
            />
          </div>
          <div className="mx-auto w-72 sm:w-[48%] lg:max-w-[370px] xl:w-[24%]">
            <Product
              link={"../src/assets/images/off4.png"}
              badgrTittle={"New"}
              badgeLink={true}
              overlay={false}
              brandName={"black"}
              brandColor={true}
            />
          </div>
        </Flex>
      </Container>
    </div>
  );
}

export default SpecialOffer;
