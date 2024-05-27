import { setUser } from "../features/user/userSlice";
import { User } from "../definitions";
import { getUserByEmail } from "../data";
import { AppDispatch } from "../store";

interface getUserParams {
  email: string;
}

export const getUser = async ({ email }: getUserParams) => {
  try {
    const user = await getUserByEmail(email);
    return user;
  } catch (error) {
    console.error("Failed to fetch user", error);
  }
};
