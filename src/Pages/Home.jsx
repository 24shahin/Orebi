import React from "react";
import Banner from "../Component/Banner";
import AdditionalInfo from "../Component/AdditionalInfo";
import Advertise from "../Component/Layout/Advertise";
import NewArrival from "../Component/NewArrival";
import Bestsellar from "../Component/Bestsellar";
import SocialOffer from "../Component/SocialOffer";
import SpecialOffer from "../Component/SpecialOffer";

function Home() {
  return (
    <>
      <Banner />
      <AdditionalInfo />
      <Advertise />
      <NewArrival />
      <Bestsellar />
      <SocialOffer />
      <SpecialOffer />
    </>
  );
}

export default Home;
