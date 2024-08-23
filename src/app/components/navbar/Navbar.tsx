"use client";

import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import Usermenu from "./Usermenu";
import { User } from "@prisma/client";
import { useSession } from "next-auth/react";
import Categories from "./Categories";

interface NavbarProps {
  user: User | null;
}
export default function Navbar({ user }: NavbarProps) {
  return (
    <div className="w-full fixed bg-white z-10 shadow-sm">
      <div className="py-2 border-b-2">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Search />
            <Usermenu user={user} />
          </div>
        </Container>
      </div>
      <Categories />
    </div>
  );
}
