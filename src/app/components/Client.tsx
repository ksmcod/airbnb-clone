"use client";

import { User } from "@prisma/client";
import useUser from "../hooks/useUser";
import { useEffect } from "react";

interface ClientProps {
  user: User | null;
}

export default function Client({ user }: ClientProps) {
  const userStore = useUser();

  useEffect(() => {
    if (user) userStore.setUser(user);
    if (!user) userStore.clearUser();
  }, [user]);

  return null;
}
