"use client";

import { getUser } from "@/app/lib/services/userApi";
import { useEffect, useState } from "react";
import { setUser } from "../lib/features/user/userSlice";
import { useAppDispatch } from "../lib/hooks";
import { User } from "../lib/definitions";

interface UserState {
  user: User | undefined;
}

export default function page() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetchUser();
  }, []);

  const email = "user@nextmail.com";
  async function fetchUser() {
    const res = await fetch("/api/user?email=user@nextmail.com");
    const data = await res.json();
    setUser(data);
  }

  return <div>ok</div>;
}
