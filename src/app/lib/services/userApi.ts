import { setUser } from "../features/user/userSlice";
import { User } from "../definitions";
import { getUserByEmail } from "../data";
import { AppDispatch } from "../store";

export const getUser = async (email: string) => {
  try {
    const user = await getUserByEmail(email);
    return user;
  } catch (error) {
    console.error("Failed to fetch user", error);
  }
};
