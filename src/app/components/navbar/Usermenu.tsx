"use client";

import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import { signOut } from "next-auth/react";
import { User } from "@prisma/client";
import useRentModal from "@/app/hooks/useRentModal";
import { useRouter } from "next/navigation";

interface UsermenuProps {
  user: User | null;
}
export default function Usermenu({ user }: UsermenuProps) {
  const router = useRouter();
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const rentModal = useRentModal();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const onRent = useCallback(() => {
    if (!user) {
      return loginModal.onOpen();
    }

    rentModal.onOpen();
  }, [user, loginModal, rentModal]);

  return (
    <div className="relative">
      <div className="flex items-center gap-3">
        <div
          onClick={onRent}
          className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
        >
          Airbnb your home
        </div>
        <div
          onClick={toggleOpen}
          className="p-4 md:py-1 md:px-2 border border-neutral-200 flex items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar src={user?.image} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            {user ? (
              <>
                <MenuItem
                  onclick={() => router.push("/trips")}
                  label="My trips"
                />
                <MenuItem
                  onclick={() => router.push("/favorites")}
                  label="My favorites"
                />
                <MenuItem
                  onclick={() => router.push("/reservations")}
                  label="My reservations"
                />
                <MenuItem
                  onclick={() => router.push("/properties")}
                  label="My properties"
                />
                <MenuItem onclick={onRent} label="Airbnb my home" />
                <hr />
                <MenuItem onclick={() => signOut()} label="Logout" />
              </>
            ) : (
              <>
                <MenuItem onclick={loginModal.onOpen} label="Login" />
                <MenuItem onclick={registerModal.onOpen} label="Signup" />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
