import React from "react";
import Container from "./Layout/Container";
import Image from "./Layout/Image";
function SocialOffer() {
  return (
    <div className="mb-32">
      <Container>
        <div className="w-full">
          <Image
            link={"../src/assets/images/socialOffer.png"}
            style={"w-full"}
          />
        </div>
      </Container>
    </div>
  );
}

export default SocialOffer;
