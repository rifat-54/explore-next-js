import React from "react";

const getSinglePage = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
};

export async function generateMetadata({ params }) {
  // read route params
  const { id } = await params;

  // fetch data
  const product = await getSinglePage(id)


  return {
    title: product.title,
    description:product.body
  };
}

const singlePost = async ({ params }) => {
  const p = await params;
  const data = await getSinglePage(p.id);
  // console.log(data);

  return (
    <div>
      <h2 className="text-3xl font-black text-red-500">{data?.title}</h2>
      <p>{data?.body}</p>
    </div>
  );
};

export default singlePost;
