'use client';

import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

export interface DragAndDropProps {
  onFilesDropped: (files: File[]) => void;
  className?: string;
  children: React.ReactNode;
  files: File[];
  setFiles: React.Dispatch<React.SetStateAction<File[]>>;
  accept: string;
}

const DragAndDrop: React.FC<DragAndDropProps> = ({ onFilesDropped, className, children, accept }) => {
  const [files, setFiles] = useState<File[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles: File[]) => {
      setFiles([...files, ...acceptedFiles]);
      onFilesDropped([...files, ...acceptedFiles]);
    },
  });

  const handleClearQueue = () => {
    setFiles([]);
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    const formData = new FormData();
    files.forEach((file) => formData.append('images', file));

    try {
      const response = await fetch('api/process-receipts', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.blob();
        const downloadUrl = window.URL.createObjectURL(data);
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = 'result.xlsx';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        console.error('Error uploading files');
      }
    } catch (error) {
      console.error('Error uploading files:', error);
    }

    setIsLoading(false);
  };

  return (
    <div>
      <div className="flex justify-center">
        <div
          {...getRootProps({
            className: `${className} flex items-center justify-center sm:w-1/2 md:w-3/5 md:h-1/5 lg:w-3/5 xl:w-3/5 border-2 border-dashed border-gray-300 rounded-lg p-8`,
          })}
        >
          <input {...getInputProps({ multiple: true })} />
          <div className="flex items-center justify-center w-full h-full">
            {isLoading ? (
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white"></div>
            ) : isDragActive ? (
              <p className="text-gray-600">{children || 'Drop the files here...'}</p>
            ) : (
              children
            )}  
          </div>
      </div>
    </div>
   
    <div className="mb-8 flex justify-center">
        <button
          onClick={handleClearQueue}
          className="bg-orange-500 text-white px-4 py-2 rounded-md"
        >
          CLEAR
        </button>

        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded-md ml-4"
        >
          SUBMIT
        </button>
      </div>

      <div className="flex justify-center item-center">    
      {files.length > 0 && (
        <div className=" mt-8">
          <p className="text-lg font-semibold mb-2">Files to be converted:</p>
          <ul className="list-disc pl-4">
            {files.map((file, index) => (
              <li key={index} className="ml-4 text-gray-600">
                {file.name}
              </li>
            ))}
          </ul>
        </div>
            )}
    </div>
  </div>
  );
};

export default DragAndDrop;