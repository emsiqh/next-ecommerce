import { sql } from "@vercel/postgres";
import { Product } from "./definitions";
import { unstable_noStore as noStore } from "next/cache";

export async function fetchProduct() {
  noStore();
  try {
    console.log("Fetching product data...");
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const data = await sql<Product>`SELECT * FROM products`;

    console.log("Data fetch completed after 3 seconds.");

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch product data.");
  }
}
