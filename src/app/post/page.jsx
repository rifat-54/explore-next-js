import Link from "next/link";

const getData=async()=>{
    const res=await fetch('https://jsonplaceholder.typicode.com/posts')
    const data=await res.json()
    return data;
}

export const metadata = {
    title: "All post",
    description: "post from json place holder ",
  };

const postPage = async() => {
    const postData=await getData()
    return (
        <div>
            <h2 className="text-4xl my-10 text-center font-bold">Post</h2>
            <div className="grid grid-cols-3 gap-10">
                {
                    postData.map((post,idx)=>(
                        <div key={idx} className="border border-red-500 rounded-md">
                            
                            <p>{post?.title}</p>
                            <p>{post?.body}</p>
                            <Link href={`/post/${post?.id}`}>
                            <button className="btn bg-black text-white">View Details</button>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default postPage;