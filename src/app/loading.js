import React from 'react';

const Loading = () => {
    return (
        <div>
            <div className='min-h-screen flex flex-col w-[90%] items-center justify-center mx-auto text-white'>
                <h1 className='text-3xl font-bold mb-4 text-green-600 italic'>Loading...</h1>
                <p>Please wait while we load the content.</p>
            </div>
        </div>
    );
};

export default Loading;