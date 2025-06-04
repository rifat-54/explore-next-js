import { authOption } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";
import LogoutButton from "./components/LogoutButton";
import LoginButton from "./components/LoginButton";


export default async function Home() {
  const session=await getServerSession(authOption)
  return (
    <div>
      <h1>hello world !</h1>
      <p className="text-red-500 my-5">from server</p>
      <p>{JSON.stringify(session)}</p>
      <p className="text-red-500 my-5">end server</p>
      {
        session?.user?<LogoutButton></LogoutButton>:
        <LoginButton></LoginButton>
      }
    </div>
    
  );
}
