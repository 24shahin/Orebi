import React from "react";
import Flex from "./Layout/Flex";
import Container from "./Layout/Container";
import Headings from "./Layout/Headings";
import Product from "./Layout/Product";
import specialOffer1 from "../../public/assets/images/off1.png";
import specialOffer2 from "../../public/assets/images/off2.png";
import specialOffer3 from "../../public/assets/images/off3.png";
import specialOffer4 from "../../public/assets/images/off4.png";

function SpecialOffer() {
  return (
    <div className="mb-32 mt-[118px]">
      <Container>
        <Headings tittle={"Special Offers"} />
        <Flex style={"justify-between flex-wrap gap-y-5"}>
          <div className="mx-auto w-72 sm:w-[48%] lg:max-w-[370px] xl:w-[24%]">
            <Product
              link={specialOffer1}
              badgrTittle={"New"}
              badgeLink={true}
              overlay={false}
              brandName={"black"}
              brandColor={true}
            />
          </div>
          <div className="mx-auto w-72 sm:w-[48%] lg:max-w-[370px] xl:w-[24%]">
            <Product
              link={specialOffer2}
              badgrTittle={"New"}
              badgeLink={true}
              overlay={false}
              brandName={"black"}
              brandColor={true}
            />
          </div>
          <div className="mx-auto w-72 sm:w-[48%] lg:max-w-[370px] xl:w-[24%]">
            <Product
              link={specialOffer3}
              badgrTittle={"New"}
              badgeLink={true}
              overlay={false}
              brandName={"black"}
              brandColor={true}
            />
          </div>
          <div className="mx-auto w-72 sm:w-[48%] lg:max-w-[370px] xl:w-[24%]">
            <Product
              link={specialOffer4}
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
