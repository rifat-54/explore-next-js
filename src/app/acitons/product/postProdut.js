'use server';

import dbConnect from "@/lib/dbConnect";


const postProdut = async(data) => {
    
    try {
        const result = await dbConnect("users").insertOne(data)
        return result;
    } catch (error) {
        console.log(error);
        return null
    }
};

export default postProdut;