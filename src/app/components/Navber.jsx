"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navber = () => {
    const pathName=usePathname()
    // console.log(pathName,pathName.includes('dashboard'));
    if(pathName.includes('dashboard')){
      return <></>;
    }
  return (
    <div>
      <ul className="flex justify-between w-1/2">
        <Link href={"/"}>
          <li>Home</li>
        </Link>
        <Link href={"/about"}>
          <li>About</li>
        </Link>
        <Link href={"/post"}>
          <li>Post</li>
        </Link>
        <Link href={"/service"}>
          <li>Service</li>
        </Link>
        <Link href={"/about/address"}>
          <li>Address</li>
        </Link>
        <Link href={"/meals"}>
          <li>Meals</li>
        </Link>
        <Link href={"/products"}>
          <li>Products</li>
        </Link>
        <Link href={"/products/add"}>
          <li>Add Products</li>
        </Link>
       
        
      </ul>
    </div>
  );
};

export default Navber;
