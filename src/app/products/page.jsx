import { redirect } from "next/navigation";
import React from "react";
import getProduct from "../acitons/product/getProduct";
export const dynamic = "force-dynamic";

const allProducts = async () => {
//     const {NEXT_PUBLIC_SERVER_URL}=process.env
//   const res = await fetch(`${NEXT_PUBLIC_SERVER_URL}/api/items`);
//   const data = await res.json();

const data=await getProduct()

//   console.log(data);
  // if(data.data.length>3){
  //     redirect('/')
  // }

  return (
    <div>
      <h2>All products</h2>
      <div>
        {data?.map((item, idx) => (
          <p key={item?._id} className="p-2 text-red-500">
            {item?.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default allProducts;

