import React from 'react';
import { MdGroup } from 'react-icons/md';

export const metadata = {
    title: 'Project Members - CoPCB',
    description: 'Manage and view project members in the dashboard.',
};

const MembersPage = () => {
    return (
          <div className='flex flex-col items-center justify-center min-h-[60vh]  border'>
           <MdGroup size={100} className='text-green-600' />
            <h1 className='text-2xl font-bold text-green-500 italic'>Project Members</h1>
            <p>Will be developed based on backend data.</p>
        </div>
    );
};

export default MembersPage;