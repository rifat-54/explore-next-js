import React from 'react';

function serviceDetails({params}) {

    const id= params.id;
    const services = [
        {
          id: 1,
          name: "Web Development",
          image: "https://i.ibb.co/0Jmshvb/web-dev.png",
          description: "We build responsive and scalable websites tailored to your business needs.",
        },
        {
          id: 2,
          name: "UI/UX Design",
          image: "https://i.ibb.co/gRRZmTC/ui-ux.png",
          description: "Design intuitive and user-friendly interfaces for a better user experience.",
        },
        {
          id: 3,
          name: "SEO Optimization",
          image: "https://i.ibb.co/FsP3cN9/seo.png",
          description: "Boost your website visibility and rank higher on search engines.",
        },
        {
          id: 4,
          name: "App Development",
          image: "https://i.ibb.co/ZfcW0Hf/app-dev.png",
          description: "We create feature-rich mobile applications for Android and iOS platforms.",
        },
        {
          id: 5,
          name: "Content Writing",
          image: "https://i.ibb.co/wM4VzTf/content-writing.png",
          description: "Engaging and SEO-friendly content writing for blogs, websites, and more.",
        },
      ];

      const singleData=services.find(data=>data.id==id)
      if(!singleData){
        return <><p className='text-red-500'>Service not found</p></>
      }
      
    return (
        <div>
            <p>Service Details</p>
            <img referrerPolicy='no-referrer' src={singleData.image} alt="" />
            <p>Id:{id}</p>
            <p>Sercice name: {singleData?.name}</p>
            <p>Details: {singleData?.description}</p>

        </div>
    );
}

export default serviceDetails;