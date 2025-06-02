import { getServerSession } from "next-auth";
import Image from "next/image";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session=await getServerSession(authOptions)
  return (
    <div>
      <h1>hello world !</h1>
      <p className="text-red-500 my-5">from server</p>
      <p>{JSON.stringify(session)}</p>
      <p className="text-red-500 my-5">end server</p>
    </div>
    
  );
}
