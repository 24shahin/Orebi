import React from "react";
import Container from "./Layout/Container";
import Image from "./Layout/Image";
import SocialOffer1 from "../../public/assets/images/socialOffer.png";
function SocialOffer() {
  return (
    <div className="mb-32">
      <Container>
        <div className="w-full">
          <Image link={SocialOffer1} style={"w-full"} />
        </div>
      </Container>
    </div>
  );
}

export default SocialOffer;
