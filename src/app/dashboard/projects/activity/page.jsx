import React from 'react';
import { LuActivity } from 'react-icons/lu';

export const metadata = {
    title: 'Project Activity - CoPCB',
    description: 'Track and view project activity in the dashboard.',
};

const ActivityPage = () => {
    return (
        <div className='flex flex-col items-center justify-center min-h-[60vh]  border'>
            <LuActivity size={100} className='text-green-600' />
            <h1 className='text-2xl font-bold text-green-500 italic'>Project Activity</h1>
            <p>Will be developed based on backend data.</p>
        </div>
    );
};

export default ActivityPage;