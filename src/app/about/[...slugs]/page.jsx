import React from 'react';

const aboutslugPage = async({params}) => {
    const p=await params.slugs;
    console.log(p);
    return (
        <div>
            <p>slg page</p>
        </div>
    );
};

export default aboutslugPage;