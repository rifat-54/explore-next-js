import dbConnect from "@/lib/dbConnect";

export async function GET() {
   
    const data = await dbConnect('users').find().toArray()
   
    return Response.json({ data })

  }




export async function POST(req) {
    console.log(req);
   
    const data = await req.json()

    const result=await dbConnect('users').insertOne(data)
   
    return Response.json(result)
  }