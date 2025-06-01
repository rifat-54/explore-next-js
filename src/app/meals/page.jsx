import { Roboto } from 'next/font/google';
import Image from 'next/image';
import InputSearchParams from './components/inputSearchParams';

import style from  './meals.module.css'

const roboto=Roboto({
    weight:['400','600'],
    subsets:['latin']
})

const meastPage = async({searchParams}) => {
    const query=  searchParams;
    // console.log('query-> ',query);
    

    const getMeals=async()=>{
        const res=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query.search}`)
        const data= await res.json()
        return (data?.meals);
    }

    const meal=await getMeals() 

   
    return (
        <div>
            <dir>

            <InputSearchParams></InputSearchParams>
            </dir>
            <h2 className='global-class'>Meals</h2>
            <div className='grid grid-cols-6 gap-11'>
                {meal?.map((item,idx)=>(
                    <div key={idx} className={`border border-blue-500 ${roboto.className}`}>
                        <Image width={400} height={400} src={item?.strMealThumb} alt={item?.strMeal} />
                        <h2 className='text-red-500 font-bold text-3xl my-10'>{item?.strMeal}</h2>
                        <p className={`${style['normal-color']}`}>{item?.strArea}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default meastPage;