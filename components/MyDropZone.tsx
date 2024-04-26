import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const DragAndDrop = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {
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
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here...</p>
        ) : (
          <p>Drag and drop some files here, or click to select files</p>
        )}
      </div>

      <div className="button-container">
        <button onClick={handleClearQueue} disabled={isLoading}>
          Clear
        </button>
        <button onClick={handleSubmit} disabled={isLoading}>
          {isLoading ? 'Submitting...' : 'Submit'}
        </button>
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