"use client";

import useUser from "@/app/hooks/useUser";
import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import Usermenu from "./Usermenu";
import { User } from "@prisma/client";
import { useSession } from "next-auth/react";

interface NavbarProps {
  tryUser: User | null;
}
export default function Navbar({ tryUser }: NavbarProps) {
  const user = useUser().user;

  console.log("In Navbar, user is: ", user);
  return (
    <div className="w-full fixed bg-white z-10 shadow-sm">
      <div className="py-2 border-b-2">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Search />
            <Usermenu tryUser={tryUser} />
          </div>
        </Container>
      </div>
    </div>
  );
}
