import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Button from './Button';

const DragAndDrop = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const onDrop = useCallback((acceptedFiles: React.SetStateAction<File[]>) => {
    setFiles(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
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

    // Perform file submission logic here
    console.log('Submitting files:', files);

    setIsLoading(false);
  };

  return (
    <div>
      <div {...getRootProps({ className: 'dark:bg-zinc-900 bg-white dropzone w-300px h-64 flex flex-col justify-center items-center rounded-lg border-2 border-dashed border-gray-300' })}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here...</p>
        ) : (
          <p>Drag and drop some files here, or click to select files</p>
        )}
      </div>  
      {files.length > 0 && (
        <div className="file-list">
          <p>Files to be converted:</p>
          <ul>
            {files.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DragAndDrop;