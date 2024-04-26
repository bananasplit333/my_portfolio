'use client';

import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

export interface DragAndDropProps {
  onFilesDropped: (files: File[]) => void;
  className?: string;
  files: File[];
  setFiles: React.Dispatch<React.SetStateAction<File[]>>;
  accept: string;
}

const DragAndDrop: React.FC<DragAndDropProps> = ({ onFilesDropped, className, accept }) => {
  const [files, setFiles] = useState<File[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles: File[]) => {
      setFiles([...files, ...acceptedFiles]);
    },
    accept: {
      'application/msword': ['.doc', '.docx'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
      'application/vnd.ms-powerpoint': ['.ppt', '.pptx'],
      'application/vnd.openxmlformats-officedocument.presentationml.presentation': ['.pptx'],
      'application/pdf': ['.pdf'],
    },
  });

  const handleClearQueue = () => {
    setFiles([]);
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    const formData = new FormData();
    files.forEach((file) => formData.append('images', file));

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
              <p className="text-gray-600">{ 'Drop the files here...'}</p>
            ) : (
              <p className="text-gray-600">{ 'Drop the files here...'}</p>
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