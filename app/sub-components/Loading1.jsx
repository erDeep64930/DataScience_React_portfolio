import React from 'react';

const Loading1 = () => {
  return (
    <div>
       <div class="hover:shadow-lg transition-shadow bg-white dark:border dark:border-gray-700 dark:bg-gray-800 rounded-md shadow p-5 flex flex-col items-center justify-center gap-5">
                    <div className="w-32 h-32 rounded-full bg-gray-200 animate-pulse"></div>
                    <div className="space-y-2">
                        <div className="mx-auto w-32 h-6 rounded-full bg-gray-200 shadow-sm animate-pulse"></div>
                        <div className="space-y-1">
                            <div className="mx-auto w-52 h-5 rounded-full bg-gray-200 shadow-sm animate-pulse"></div>
                            <div className="mx-auto w-44 h-5 rounded-full bg-gray-200 shadow-sm animate-pulse"></div>
                        </div>
                        <div className="mx-auto w-20 h-6 rounded-full bg-gray-200 shadow-sm animate-pulse"></div>
                    </div>
                </div>
    </div>
  );
}

export default Loading1;
