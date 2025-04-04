import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Image from "./Layout/Image";
import { Link } from "react-router-dom";

function Banner() {
  const [dotActive, SetDotActive] = useState(0);
  const settings = {
    dots: true,
    beforeChange: (prev, next) => {
      SetDotActive(next);
    },
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    arrows: false,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "8%",
          transform: "translateY(-50%)",
          width: "0%",
        }}
      >
        <ul style={{ margin: "0px" }}>
          {" "}
          <div style={{ display: "block" }}>{dots}</div>{" "}
        </ul>
      </div>
    ),

    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "45px",
                color: "#262626",
                borderRight: "3px #262626 solid",
                height: "45px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }
            : {
                width: "45px",
                color: "transparent",
                borderRight: "3px white solid",
                height: "45px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }
        }
      >
        0{i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          appendDots: (dots) => (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "5%",
                transform: "translateY(-50%)",
                width: "0%",
              }}
            >
              <ul style={{ margin: "0px" }}>
                {" "}
                <div style={{ display: "block" }}>{dots}</div>{" "}
              </ul>
            </div>
          ),

          customPaging: (i) => (
            <div
              style={
                i === dotActive
                  ? {
                      width: "30px",
                      color: "#262626",
                      borderRight: "2px #262626 solid",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: "12px",
                    }
                  : {
                      width: "30px",
                      color: "transparent",
                      borderRight: "2px white solid",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: "12px",
                    }
              }
            >
              0{i + 1}
            </div>
          ),
        },
      },

      {
        breakpoint: 640,
        settings: {
          appendDots: (dots) => (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "3%",
                transform: "translateY(-50%)",
                width: "0%",
              }}
            >
              <ul style={{ margin: "0px" }}>
                {" "}
                <div style={{ display: "block" }}>{dots}</div>{" "}
              </ul>
            </div>
          ),

          customPaging: (i) => (
            <div
              style={
                i === dotActive
                  ? {
                      width: "30px",
                      color: "#262626",
                      borderRight: "2px #262626 solid",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: "12px",
                    }
                  : {
                      width: "30px",
                      color: "transparent",
                      borderRight: "2px white solid",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: "12px",
                    }
              }
            >
              0{i + 1}
            </div>
          ),
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <Link to={"#"}>
            <Image link="/public/assets/images/banner.png" style={"mx-auto"} />
          </Link>
        </div>
        <div>
          <Link to={"#"}>
            <Image link="/public/assets/images/banner.png" style={"mx-auto"} />
          </Link>
        </div>
        <div>
          <Link to={"#"}>
            <Image link="/public/assets/images/banner.png" style={"mx-auto"} />
          </Link>
        </div>
        <div>
          <Link to={"#"}>
            <Image link="/public/assets/images/banner.png" style={"mx-auto"} />
          </Link>
        </div>
      </Slider>
    </div>
  );
}

export default Banner;
