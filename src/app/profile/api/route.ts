import { getUserByEmail } from "../../lib/data";

export default async function GET(req: Request) {
  //   const { email } = req.query;
  const email = "user@nextmail.com";
  const res = await getUserByEmail(email);
  console.log(res);

  // const user = await res.json();
  return res;
}
