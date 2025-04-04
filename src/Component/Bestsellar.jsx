import React from "react";
import Flex from "./Layout/Flex";
import Container from "./Layout/Container";
import Headings from "./Layout/Headings";
import Product from "./Layout/Product";
import ProductImage1 from "../../public/assets/images/best1.png";
import ProductImage2 from "../../public/assets/images/best2.png";
import ProductImage3 from "../../public/assets/images/best3.png";
import ProductImage4 from "../../public/assets/images/best4.png";

function Bestsellar() {
  return (
    <div className="mb-32 mt-[118px]">
      <Container>
        <Headings tittle={"Our Bestsellers"} />
        <Flex style={"justify-between flex-wrap gap-y-5"}>
          <div className="mx-auto w-72 sm:w-[48%] lg:max-w-[370px] xl:w-[24%]">
            <Product
              link={ProductImage1}
              badgrTittle={"New"}
              badgeLink={true}
              overlay={false}
              brandName={"black"}
              brandColor={true}
            />
          </div>
          <div className="mx-auto w-72 sm:w-[48%] lg:max-w-[370px] xl:w-[24%]">
            <Product
              link={ProductImage2}
              badgrTittle={"New"}
              badgeLink={true}
              overlay={false}
              brandName={"black"}
              brandColor={true}
            />
          </div>
          <div className="mx-auto w-72 sm:w-[48%] lg:max-w-[370px] xl:w-[24%]">
            <Product
              link={ProductImage3}
              badgrTittle={"New"}
              badgeLink={true}
              overlay={false}
              brandName={"black"}
              brandColor={true}
            />
          </div>
          <div className="mx-auto w-72 sm:w-[48%] lg:max-w-[370px] xl:w-[24%]">
            <Product
              link={ProductImage4}
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

export default Bestsellar;
