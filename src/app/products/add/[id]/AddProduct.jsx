'use client'
import postProdut from '@/app/acitons/product/postProdut';
import { useRouter } from 'next/navigation';
import React from 'react';

const AddItem = () => {

    const router=useRouter()

    const handleSubmit=async(e)=>{
        e.preventDefault()
        const form=e.target;
        const item=form.product.value;
        // console.log(item);
        const data={
            name:item
        }

        // post to database
        // const {NEXT_PUBLIC_SERVER_URL}=process.env

        // const res=await fetch(`${NEXT_PUBLIC_SERVER_URL}/api/items`,{
        //     method:'POST',
        //     body:JSON.stringify(data),
        //     headers:{
        //         'Content-Type':'application/json'
        //     }
        // }) 
        // const result= await res.json()

        const result=await postProdut(data)
        // console.log(result);
        form.reset()
        router.push('/products')
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className='flex gap-10 '>
                <label htmlFor="Add item">Add item</label>
                <input className='border border-blue-300' type="text" name="product" placeholder='add product' id="" />
                <button className='btn' type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default AddItem;