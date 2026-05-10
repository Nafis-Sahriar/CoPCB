import React from 'react';
import { IoSettings } from 'react-icons/io5';
export const metadata = {
    title: 'Dashboard Settings - CoPCB',
    description: 'Configure and manage your dashboard settings in the CoPCB platform.',
};

const SettingsPage = () => {
    return (
           <div className='flex flex-col items-center justify-center min-h-[85vh]  border rounded-3xl'>
                    <IoSettings size={100} className='text-green-600' />
                    <h1 className='text-2xl font-bold text-green-500 italic'>Dashboard Settings</h1>
                    <p>Will be developed based on backend data.</p>
                </div>
    );
};

export default SettingsPage;