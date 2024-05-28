import Link from "next/link";
import Menu from "@/app/components/Menu";
import Image from "next/image";
import SearchBar from "@/app/components/SearchBar";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { getUserByEmail } from "../lib/data";
import { useAppDispatch } from "../lib/hooks";
import { setUser } from "../lib/features/user/userSlice";

const NavIcons = dynamic(() => import("@/app/components/NavIcons"), {
  ssr: false,
});

export default async function Navbar() {
  const email = "user@nextmail.com";
  const user = await getUserByEmail(email);
  const dispatch = useAppDispatch();

  if (!user) {
    return <p className="mt-4 text-gray-400">No data available.</p>;
  } else {
    // display user information
    dispatch(setUser(user));
    return (
      <p>
        {user.email} {typeof user}
      </p>
    );
  }
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* MOBILE */}
      <div className="h-full flex items-center justify-between md:hidden">
        <Link href="/">
          <div className="text-2xl tracking-wide">OLODO</div>
        </Link>
        <Menu />
      </div>
      {/* BIGGER SCREENS */}
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        {/* LEFT */}
        <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="" width={24} height={24} />
            <div className="text-2xl tracking-wide">OLODO</div>
          </Link>
          <div className="hidden xl:flex gap-4">
            <Link href="/">Homepage</Link>
            <Link href="/">Shop</Link>
            <Link href="/">Deals</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
          <Suspense>
            <SearchBar placeholder="Looking for something..." />
          </Suspense>
          <NavIcons />
        </div>
      </div>
    </div>
  );
}
