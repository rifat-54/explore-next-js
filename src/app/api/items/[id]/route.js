import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";


  export async function GET(req,{params}){
    const p=await params;
    // console.log(p);
    const result=await dbConnect('users').findOne({_id:new ObjectId(p.id)})
    return Response.json(result)
  }

  export async function PATCH(req,params){
    const p=await params;
    const data=await req.json()
    const query={_id:new ObjectId(p.id)}
    const updateDoc={
      $set:{
       ...data
      }
    }
    const result=await dbConnect('users').updateOne(query,updateDoc)
    return Response.json(result)
  }



  export async function DELETE(req,{params}){
    const p=await params;
   
    const query={_id:new ObjectId(p.id)}
   
    const result=await dbConnect('users').deleteOne(query)
    return Response.json(result)

  }