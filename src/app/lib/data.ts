import { sql } from "@vercel/postgres";
import { Product, User } from "./definitions";
import { unstable_noStore as noStore } from "next/cache";

export async function getUserByEmail(email: string) {
  console.log({
    POSTGRES_URL: process.env.POSTGRES_URL,
    POSTGRES_URL_NON_POOLING: process.env.POSTGRES_URL_NON_POOLING,
  });
  try {
    const user = await sql`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0] as User;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}

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
