import React from 'react';

const layout = ({children}) => {
    return (
        <div className='grid grid-cols-12'>
            <div className='col-span-3'>
                <ul>hoe</ul>
            </div>
            <div className='col-span-9'>
                {children}
            </div>
        </div>
    );
};

export default layout;