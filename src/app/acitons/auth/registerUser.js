'use server'

import dbConnect from "@/lib/dbConnect";



const registerUser = async(data) => {
    
    console.log('data->',data);
    try {
        const result=await dbConnect('test-user').insertOne(data)
        return {
            acknowledged: result.acknowledged,
            insertedId: result.insertedId.toString()
        };
        
    } catch (error) {
        console.log(error);
        return null;
    }
    
};

export default registerUser;