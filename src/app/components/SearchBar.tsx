"use client";

// import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function SearchBar({ placeholder }: { placeholder: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    if (name) {
      params.set("name", name);
      router.replace(`/list?${params.toString()}`);
    } else {
      params.delete("name");
    }
    // if (name) {
    //   router.push(`/list?name=${name}`);
    // }
  };

  return (
    <form
      className="flex items-center justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        name="name"
        placeholder={placeholder}
        className="flex-1 bg-transparent outline-none"
      />
      <button className="cursor-pointer relative">
        {/* <Image src="/search.png" alt="" width={16} height={16} /> */}
        <MagnifyingGlassIcon className="w-5 h-5 text-gray-500 peer-focus:text-gray-900" />
      </button>
    </form>
  );
}
