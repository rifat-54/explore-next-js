"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const aboutpage = () => {
    const router=useRouter()
    const islogin=false;
    const handleSubmit=()=>{
        if(islogin){
            router.push('/about/address')
        }else{
            router.push('/')
        }
    }
    return (
        <div>
          <h2 className='my-5 text-4xl text-center'>  about page</h2>
            <p><Link href={'/about/address'}>Go to Address page</Link></p>

            <button type='button' onClick={handleSubmit}>address page</button>
        </div>
    );
};

export default aboutpage;