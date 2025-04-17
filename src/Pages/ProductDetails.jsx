import React, { useRef, useState } from "react";
import Container from "../Component/Layout/Container";
import Breadcumb from "../Component/Layout/Breadcumb";
import prodetails1 from "../../public/assets/images/prodDetails1.png";
import prodetails2 from "../../public/assets/images/prodDetails2.png";
import prodetails3 from "../../public/assets/images/prodDetails3.png";
import prodetails4 from "../../public/assets/images/prodDetails4.png";
import Headings from "../Component/Layout/Headings";
import { FaStar } from "react-icons/fa";
import { BiMinus, BiPlus } from "react-icons/bi";
import OutSideClick from "../feature/function/click";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Virtual, Autoplay } from "swiper/modules";

function ProductDetails() {
  const [feature, setFeature] = useState(false);
  const [shipping, setShipping] = useState(false);
  const feaRef = useRef(null);
  const ShipRef = useRef(null);
  OutSideClick(feaRef, () => setFeature(false));
  OutSideClick(ShipRef, () => setShipping(false));
  const [showTitle, setShowtitle] = useState("reviews");
  const productImage = [prodetails1, prodetails2, prodetails3, prodetails4];
  return (
    <Container>
      <Breadcumb />
      <div className="hidden flex-wrap justify-between gap-10 lg:flex ">
        <div className="w-prodDetails">
          <img src={prodetails1} alt="" className="w-full" />
        </div>
        <div className="w-prodDetails">
          <img src={prodetails2} alt="" className="w-full" />
        </div>
        <div className="w-prodDetails">
          <img src={prodetails3} alt="" className="w-full" />
        </div>
        <div className="w-prodDetails">
          <img src={prodetails4} alt="" className="w-full" />
        </div>
      </div>
      <div className="flex  h-[300px] w-full items-center justify-center lg:hidden">
        <Swiper
          modules={[Virtual, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto-slide every 3s
          loop={true} // Infinite loop
          className="h-full"
        >
          {productImage.map((slideContent, index) => (
            <SwiperSlide key={index}>
              <img
                src={slideContent}
                alt={`Product ${index + 1}`}
                className="mx-auto h-full w-full object-contain"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="mb-[123px] mt-[50px] w-full">
        <Headings tittle={"Product"} />
        <div className="mb-6 flex gap-x-6">
          <div className="flex gap-x-2 text-[#FFD881]">
            <FaStar className="cursor-pointer" />
            <FaStar className="cursor-pointer" />
            <FaStar className="cursor-pointer" />
            <FaStar className="cursor-pointer" />
            <FaStar className="cursor-pointer" />
          </div>
          <h3 className="text-sm text-t2color">1 Review</h3>
        </div>
        <div className="flex w-full items-center gap-x-6 border-b border-bordercolor pb-6 md:w-prodDetails">
          <p className="text-sm text-t2color line-through md:text-base">
            $88.00
          </p>
          <p className="text-base text-tcolor md:text-xl">$44.00</p>
        </div>
        <div>
          <div className="mt-8 flex items-center text-sm font-bold md:text-base">
            <p className="w-[100px] uppercase">color :</p>
            <ul className="flex items-center gap-x-4">
              <li className="h-5 w-5 rounded-full bg-[#979797]"></li>
              <li className="h-5 w-5 rounded-full bg-[#FF8686]"></li>
              <li className="h-5 w-5 rounded-full bg-[#7ED321]"></li>
              <li className="h-5 w-5 rounded-full bg-[#B6B6B6]"></li>
              <li className="h-5 w-5 rounded-full bg-[#15CBA5]"></li>
            </ul>
          </div>
          <div className="mt-8 flex items-center text-sm font-bold md:text-base">
            <p className="w-[100px] uppercase">Size :</p>
            <div className="border border-bordercolor">
              <select className="flex w-20 items-center gap-x-4 bg-transparent  px-3 py-2 md:w-[140px] md:px-5">
                <option value="" className="" defaultValue>
                  S
                </option>
                <option value="" className="" defaultValue>
                  M
                </option>
                <option value="" className="" defaultValue>
                  L
                </option>
                <option value="" className="" defaultValue>
                  XL
                </option>
              </select>
            </div>
          </div>
          <div className="mt-8 flex items-center text-sm font-bold md:text-base">
            <p className="w-[100px] uppercase">quantity :</p>
            <div className="flex h-9 items-center justify-center border border-bordercolor px-5">
              <div className="mx-auto flex  w-[72px] justify-between sm:m-0 lg:w-[140px]">
                <h4 className="lineShadow-r flex w-1/3 cursor-pointer items-center justify-center border-r border-transparent text-sm text-t2color transition-all duration-150 ease-linear hover:border-bordercolor lg:text-base">
                  <BiMinus />
                </h4>
                <h4 className="flex w-1/3 cursor-pointer items-center justify-center text-sm text-t2color lg:text-base">
                  1
                </h4>
                <h4 className="lineShadow-l flex w-1/3 cursor-pointer items-center justify-center border-r border-transparent text-sm text-t2color transition-all duration-150 ease-linear hover:border-bordercolor lg:text-base">
                  <BiPlus />
                </h4>
              </div>
            </div>
          </div>
          <div className="mt-8 flex w-full items-center border-b border-t border-bordercolor py-6 text-sm font-bold md:w-prodDetails md:text-base">
            <p className="w-[100px] uppercase">STATUS :</p>
            <p className="text-base text-t2color">In Stock</p>
          </div>
          <div className="mt-[30px] flex w-full gap-x-5 border-b border-bordercolor pb-7 md:w-prodDetails">
            <button className="mb-2 h-9 w-[200px] border border-[#2b2b2b] bg-white font-bold text-tcolor transition-all duration-200 ease-linear hover:bg-tcolor hover:text-white lg:h-[50px]">
              Add to Wish List
            </button>
            <button className="mb-2 h-9 w-[200px] border border-[#2b2b2b] bg-tcolor font-bold text-white transition-all duration-200 ease-linear hover:bg-white hover:text-tcolor lg:h-[50px]">
              Add to Cart
            </button>
          </div>
          <div
            onClick={() => setFeature(true)}
            ref={feaRef}
            className="relative"
          >
            <div className="flex w-full cursor-pointer items-center justify-between border-b border-bordercolor py-6 md:w-prodDetails">
              <p className="text-base font-bold text-tcolor">
                FEATURES & DETAILS
              </p>
              <BiPlus />
            </div>
            {feature && (
              <ul className="absolute -bottom-28 left-0 z-10 bg-bordercolor p-5">
                <li>Performance Details</li>
                <li>Warranty & Support</li>
                <li>Environmental or Sustainability Info</li>
              </ul>
            )}
          </div>
          <div
            onClick={() => setShipping(true)}
            ref={ShipRef}
            className="relative"
          >
            <div className="flex w-full cursor-pointer items-center justify-between border-b border-bordercolor py-6 md:w-prodDetails">
              <p className="text-base font-bold text-tcolor">
                SHIPPING & RETURNS
              </p>
              <BiPlus />
            </div>
            {shipping && (
              <ul className="absolute left-0 top-[72px] z-10 bg-bordercolor p-5">
                <li>Shipping Methods</li>
                <li>Estimated Delivery Time</li>
                <li>Shipping Cost</li>
                <li>Return Policy</li>
                <li>Refund Information</li>
                <li>Exchange Policy</li>
              </ul>
            )}
          </div>
          <p className="mt-5 w-full text-base text-t2color md:w-prodDetails">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div>
        <div className="mb-10 flex gap-x-3 lg:gap-x-[62px]">
          <h3
            className={`cursor-pointer text-xl  ${showTitle == "description" ? "font-bold text-tcolor" : "text-t2color"}`}
            onClick={() => setShowtitle("description")}
          >
            Description
          </h3>
          <h3
            className={`cursor-pointer text-xl ${showTitle == "reviews" ? "font-bold text-tcolor" : "text-t2color"}`}
            onClick={() => setShowtitle("reviews")}
          >
            Reviews (1)
          </h3>
        </div>
        {showTitle == "reviews" && (
          <div className="w-full">
            <h3 className="w-full border-b border-bordercolor pb-4 text-sm text-t2color">
              1 review for Product
            </h3>
            <div className="mb-3 mt-6 flex items-center gap-x-9">
              <h3 className="text-base text-tcolor">John Ford</h3>
              <div className="flex gap-x-2 text-[#FFD881]">
                <FaStar className="cursor-pointer" />
                <FaStar className="cursor-pointer" />
                <FaStar className="cursor-pointer" />
                <FaStar className="cursor-pointer" />
                <FaStar className="cursor-pointer" />
              </div>
            </div>
            <h3 className="border-b border-bordercolor pb-4 text-sm text-t2color">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </h3>
          </div>
        )}
        {showTitle == "description" && (
          <div className="w-full">
            <h3 className="w-full pb-4 text-sm text-t2color">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
              sapiente minima nisi? Voluptates, laboriosam facilis. Consequuntur
              velit facere dolorum perspiciatis eligendi, officia harum
              necessitatibus ullam cum suscipit doloribus aut tenetur
              repudiandae quia neque hic corporis nostrum id similique odit
              accusamus consectetur magni voluptatem ad. Ipsam reiciendis fugiat
              natus ipsa excepturi!
            </h3>
          </div>
        )}
      </div>
      <div className="mt-[53px]">
        <h3 className="mb-12 text-xl font-bold text-tcolor">Add a Review</h3>
        <div className="mb-6 flex flex-col">
          <label htmlFor="" className="text-bold text-base md:mb-4">
            Name
          </label>
          <input
            type="text"
            placeholder="Your name here"
            className="text-bold w-full border-b border-[#F0F0F0] py-[17px] text-sm text-t2color outline-none md:w-[780px]"
          />
        </div>
        <div className="mb-6 flex flex-col">
          <label htmlFor="" className="text-bold  text-base md:mb-4">
            Email
          </label>
          <input
            type="text"
            placeholder="Your email here"
            className="text-bold w-full border-b border-[#F0F0F0] py-[17px] text-sm text-t2color outline-none md:w-[780px]"
          />
        </div>
        <div className="mb-6 flex flex-col">
          <label htmlFor="" className="text-bold  text-base md:mb-4">
            Review
          </label>
          <textarea
            type="text"
            placeholder="Your Review here"
            className="text-bold w-full resize-none border-b border-[#F0F0F0] py-[17px] text-sm text-t2color outline-none md:w-[780px]"
          />
        </div>
        <button className="h-9 w-32 border border-[#2b2b2b] bg-tcolor font-bold text-white transition-all duration-200 ease-linear hover:bg-white hover:text-tcolor md:h-[50px] md:w-[200px]">
          Post
        </button>
      </div>
    </Container>
  );
}

export default ProductDetails;
