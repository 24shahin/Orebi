import React from "react";
import Container from "./Layout/Container";
import Headings from "./Layout/Headings";
import Product from "./Layout/Product";
import SampleNextArrow from "./Layout/SampleNextArrow";
import SamplePrevArrow from "./Layout/SamplePrevArrow";
import Slider from "react-slick";

function NewArrival() {
  var settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container gap-x-5">
      <Container>
        <Headings tittle={"New Arrivals"} />
        <Slider {...settings}>
          <div className="!max-w-[370px]">
            <Product
              link={"../src/assets/images/arr1.png"}
              badgeLink={false}
              overlay={true}
            />
          </div>
          <div className="!max-w-[370px]">
            <Product
              link={"../src/assets/images/arr2.png"}
              badgrTittle={"New"}
              badgeLink={true}
              overlay={true}
            />
          </div>
          <div className="!max-w-[370px]">
            <Product
              link={"../src/assets/images/arr3.png"}
              badgeLink={false}
              overlay={true}
              brandColor={true}
              brandName={"black"}
            />
          </div>
          <div className="!max-w-[370px]">
            <Product
              link={"../src/assets/images/arr4.png"}
              badgrTittle={"-10%"}
              badgeLink={true}
              overlay={true}
            />
          </div>
          <div className="!max-w-[370px]">
            <Product
              link={"../src/assets/images/arr1.png"}
              badgrTittle={"-10%"}
              badgeLink={true}
              overlay={true}
            />
          </div>
        </Slider>
      </Container>
    </div>
  );
}

export default NewArrival;
