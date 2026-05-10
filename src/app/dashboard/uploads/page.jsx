import React from 'react';
import { FaUpload } from 'react-icons/fa';

export const metadata = {
    title: 'Uploads - CoPCB',
    description: 'Manage your file uploads related to your projects in the dashboard.',
};

const UploadPage = () => {
    return (
          <div className='flex flex-col items-center justify-center min-h-[85vh]  border rounded-3xl'>
                            <FaUpload size={100} className='text-green-600' />
                            <h1 className='text-2xl font-bold text-green-500 italic'>Dashboard Uploads</h1>
                            <p>Will be developed based on backend data.</p>
                        </div>
    );
};

export default UploadPage;