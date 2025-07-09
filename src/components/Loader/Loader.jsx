import React from 'react';
import { ClimbingBoxLoader } from 'react-spinners';

const Loader = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <ClimbingBoxLoader color='#00ff99'></ClimbingBoxLoader>
        </div>
    );
};

export default Loader;