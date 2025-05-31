import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div>
            <h2>404 Page not found</h2>
        
            <Link href="/">Go back to home</Link>
        </div>
    );
};

export default NotFound;