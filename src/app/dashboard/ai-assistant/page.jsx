import React from 'react';
import { FaRobot } from 'react-icons/fa';

const AiAssistantPage = () => {
    return (
          <div className='flex flex-col items-center justify-center min-h-[85vh]  border rounded-3xl'>
                            <FaRobot size={100} className='text-green-600' />
                            <h1 className='text-2xl font-bold text-green-500 italic'>Dashboard AI Assistant</h1>
                            <p>Will be developed based on backend data.</p>
                        </div>
    );
};

export default AiAssistantPage;