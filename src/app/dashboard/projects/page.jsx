import React from 'react';
import { VscPreview } from 'react-icons/vsc';

export const metadata = {
    title: 'Projects - CoPCB',
    description: 'View and manage your projects in the dashboard.',
};

const ProjectsPage = () => {
    return (
          <div className='flex flex-col items-center justify-center min-h-[60vh]  border'>
                    <VscPreview  size={100} className='text-green-600' />
                    <h1 className='text-2xl font-bold text-green-500 italic'>Project Overview</h1>
                    <p>Will be developed based on backend data.</p>
                </div>
    );
};

export default ProjectsPage;