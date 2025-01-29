import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="relative">
        <div className="w-12 h-12 rounded-full border-4 border-blue-200 animate-spin border-t-blue-600"></div>
        <div className="mt-4 text-center text-gray-600">Memuat...</div>
      </div>
    </div>
  );
};

export default LoadingSpinner;