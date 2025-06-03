import dbConnect from "@/lib/dbConnect";
import { revalidatePath } from "next/cache";
import { collectionName } from './../../../lib/dbConnect';

export async function GET() {
   
    const data = await dbConnect(collectionName.USER).find().toArray()
   
    return Response.json({ data })

  }




export async function POST(req) {
    // console.log(req);
   
    const data = await req.json()

    const result=await dbConnect(collectionName.USER).insertOne(data)
    revalidatePath('/products')
   
    return Response.json(result)
  }

