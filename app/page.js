import NavBar from "@/components/NavBar";
import { getServerSession } from "next-auth";
import authOptions from "@/lib/auth/options";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return <NavBar session={session} />;
}
