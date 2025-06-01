"use server";

import dbConnect from "@/lib/dbConnect";

const getProduct = async () => {
  try {
    const data = await dbConnect("users").find().toArray();

    return data;
  } catch (error) {
    console.log(error);
    return []
  }
};

export default getProduct;
