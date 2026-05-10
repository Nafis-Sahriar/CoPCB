import React from 'react';
import { FaFileCode } from 'react-icons/fa';

export const metadata = {
    title: 'Project Files - CoPCB',
    description: 'View and manage your project files in the dashboard.',
};

const FilesPage = () => {
    return (
        <div className='flex flex-col items-center justify-center min-h-[60vh]  border'>
            <FaFileCode size={100} className='text-green-600' />
            <h1 className='text-2xl font-bold text-green-500 italic'>Project Files</h1>
            <p>Will be developed based on backend data.</p>
        </div>
    );
};

export default FilesPage;