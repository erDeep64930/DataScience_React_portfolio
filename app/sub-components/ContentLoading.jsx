import React from 'react';

const ContentLoading = () => {
  return (
    <div>
        <div className="hover:shadow-lg transition-shadow bg-white dark:border dark:border-gray-700 dark:bg-gray-800 rounded-md shadow p-5 space-y-3">
                    <div className="h-44 w-full bg-gray-200 rounded-lg animate-pulse"></div>
                    <div className="space-y-3">
                        <div className="w-8/12 h-5 rounded-full shadow bg-gray-200 animate-pulse"></div>
                        <div className="space-y-1">
                            <div className="w-full h-5 rounded-full shadow bg-gray-200 animate-pulse"></div>
                            <div className="w-full h-5 rounded-full shadow bg-gray-200 animate-pulse"></div>
                            <div className="w-full h-5 rounded-full shadow bg-gray-200 animate-pulse"></div>
                            <div className="w-full h-5 rounded-full shadow bg-gray-200 animate-pulse"></div>
                            <div className="w-7/12 h-5 rounded-full shadow bg-gray-200 animate-pulse"></div>
                        </div>
                        <div className="flex gap-2">
                            <div className="w-16 h-5 rounded-full bg-gray-200 shadow animate-pulse"></div>
                            <div className="w-12 h-5 rounded-full bg-gray-200 shadow animate-pulse"></div>
                            <div className="w-20 h-5 rounded-full bg-gray-200 shadow animate-pulse"></div>
                        </div>
                    </div>
                </div>
    </div>
  );
}

export default ContentLoading;
