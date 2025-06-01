import React from 'react';
import AddItem from './[id]/AddProduct';

const AddProduct = () => {
    return (
        <div>
            <h2 className='my-10 text-center font-bold text-4xl'>Add Product</h2>
            <div>
              <AddItem></AddItem>  
            </div>
        </div>
    );
};

export default AddProduct;