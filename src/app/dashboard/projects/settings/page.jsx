import React from 'react';
import { IoSettingsSharp } from 'react-icons/io5';

export const metadata = {
    title: 'Project Settings - CoPCB',
    description: 'Configure and manage your project settings in the dashboard.',
};

const ProjectSettingsPage = () => {
    return (
         <div className='flex flex-col items-center justify-center min-h-[60vh]  border'>
           <IoSettingsSharp size={100} className='text-green-600' />
            <h1 className='text-2xl font-bold text-green-500 italic'>Project Settings</h1>
            <p>Will be developed based on backend data.</p>
        </div>
    );
};

export default ProjectSettingsPage;