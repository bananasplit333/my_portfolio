'use client';

import React from 'react';
import DragAndDrop, { DragAndDropProps } from '@/components/DragAndDrop';

const FlashCardPage: React.FC = () => {
  const [files, setFiles] = React.useState<File[]>([]);

  const handleFilesDropped = (droppedFiles: File[]) => {
    setFiles(droppedFiles);
  };

  const dragAndDropProps: DragAndDropProps = {
    files,
    setFiles,
    onFilesDropped: handleFilesDropped,
    className: 'border-2 border-dashed border-gray-400 rounded-lg lg:py-30 xl:py-40 md:py-20 mb-8',
    children: <p className="text-l text-gray-600">Drop Your Files Here</p>,
    accept: '.pdf,.doc,.docx,.ppt,.pptx',
  };

  return (
    <>
      <div className="flex justify-center flex-col text-center">
        <div>
          <h1 className="text-3xl font-bold mb-4 items-center">Document to Flashcard Converter</h1>
          <p className="lg:text-lg md:text-lg xs:text-sm sm:text-sm text-left mb-8 text-gray-600">
            Easily convert your PDF and document files into flashcards.
            The application accepts PDF, DOC, DOCX, PPT, and PPTX formats.
            Takes advantage of text extraction and prompt engineering to make your learning easier.
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <DragAndDrop className="" {...dragAndDropProps}></DragAndDrop>
      </div>
      
      <div className="flex flex-col items-center">
        <p className="text-gray-600">PDF and Document to Flashcard Conversion</p>
      </div>
    </>
  );
};

export default FlashCardPage;