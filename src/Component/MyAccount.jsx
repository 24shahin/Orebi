import React, { useState } from "react";
import Container from "./Layout/Container";
import Breadcumb from "./Layout/Breadcumb";
import Flex from "./Layout/Flex";
import List from "./Layout/List";
import Listitmem from "./Layout/Listitmem";

function MyAccount() {
  const [activeItem, setActiveItem] = useState("Dashboard");

  const menuItems = [
    "Dashboard",
    "Others",
    "Donwloads",
    "Addresses",
    "Account details",
    "Logout",
  ];

  return (
    <Container>
      <Breadcumb />
      <Flex style={"gap-x-10"}>
        <div>
          {menuItems.map((item) => (
            <List
              key={item}
              style={"sm:w-[234px] border-b border-bordercolor pb-5 mb-5 w-32"}
            >
              <Listitmem
                onClick={() => setActiveItem(item)}
                style={`text-sm md:text-base text-tcolor cursor-pointer transition-all duration-200 ease-linear ${
                  activeItem === item ? "font-bold" : "font-normal"
                }`}
              >
                {item}
              </Listitmem>
            </List>
          ))}
        </div>

        <div className="w-[925px]">
          <h2 className="mb-10 text-sm text-t2color md:text-base ">
            Hello <span className="font-bold text-tcolor">admin</span> (not{" "}
            <span className="font-bold text-tcolor">admin</span>?{" "}
            <span className="cursor-pointer font-bold text-tcolor">
              Log out
            </span>
            )
          </h2>
          <p className="text-sm text-t2color md:text-base">
            From your account dashboard you can view your{" "}
            <span className="font-bold text-tcolor">recent orders</span>, manage
            your{" "}
            <span className="font-bold text-tcolor">
              shipping and billing addresses, and edit your password and account
              details.
            </span>
          </p>
        </div>
      </Flex>
    </Container>
  );
}

export default MyAccount;
