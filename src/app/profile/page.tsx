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
  const [user, setUser] = useState();
  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    const response = await fetch("/profile/api");
    const data = await response.json();
    setUser(data);
  };

  return (
    <div>
      <>ok</>
    </div>
  );
}
