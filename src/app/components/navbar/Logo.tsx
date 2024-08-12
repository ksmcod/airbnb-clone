"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export default function Logo() {
  const router = useRouter();

  const handleClick = useCallback(() => {
    router.push("/");
    router.refresh();
  }, []);

  return (
    <Image
      alt="Logo"
      className="hidden md:block cursor-pointer"
      height={100}
      width={100}
      src={"/images/airbnb-logo.png"}
      // onClick={() => router.push("/")}
      onClick={handleClick}
    />
  );
}
