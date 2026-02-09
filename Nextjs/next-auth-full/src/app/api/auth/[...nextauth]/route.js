import { authOptions } from "@/lib/authOptions";
import NextAuth from "next-auth";

//name , email , image
const userList = [
  { name: "hablu", password: "1234" },
  { name: "dablu", password: "5678" },
  { name: "bablu", password: "8901" },
];



const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
