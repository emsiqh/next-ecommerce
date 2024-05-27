"use client";

import Image from "next/image";
// import { fetchProduct } from "@/app/lib/data";

export default async function CartModal() {
  // const products = await fetchProduct();
  // console.log(products);
  return (
    <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20">
      Cart
    </div>
  );
}
