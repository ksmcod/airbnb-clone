"use client";

import useUser from "@/app/hooks/useUser";
import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import Usermenu from "./Usermenu";

export default function Navbar() {
  const user = useUser().user;

  console.log("In Navbar, user is: ", user);
  return (
    <div className="w-full fixed bg-white z-10 shadow-sm">
      <div className="py-2 border-b-2">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Search />
            <Usermenu />
          </div>
        </Container>
      </div>
    </div>
  );
}
