import React from 'react';
import { FaHome } from 'react-icons/fa';

export const metadata = {
    title: 'Dashboard - CoPCB',
    description: 'Welcome to your dashboard. Here you can manage your projects, files, and uploads.',
};

const DashBoardHome = () => {
    return (
          <div className='flex flex-col items-center justify-center min-h-[85vh]  border rounded-3xl'>
            <FaHome size={100} className='text-green-600' />
            <h1 className='text-2xl font-bold text-green-500 italic'>Dashboard Home</h1>
            <p>Will be developed based on backend data.</p>
        </div>
    );
};

export default DashBoardHome;