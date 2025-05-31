'use client'
import { usePathname, useRouter } from 'next/navigation';

import React, { useEffect, useState } from 'react';

const InputSearchParams = () => {
 
    const [search ,setSearch]=useState('')
    const pathname=usePathname()
    const router=useRouter()

    useEffect(()=>{
        const searchQuery={search};
        const urlQuery=new URLSearchParams(searchQuery)
        const url=`${pathname}?${urlQuery}`;
        router.push(url)

    },[search])

  return (
    <div className="my-10 flex justify-center">
     
      <input
        placeholder="search food"
        className="input border-2 border-black"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        type="text"
      />
    </div>
  );
};

export default InputSearchParams;
