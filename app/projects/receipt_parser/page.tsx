'use client';

import {useState} from 'react';
import DragAndDrop from '@/components/MyDropZone';

const ReceiptParser = () => {
  return (
    <div className="flex flex-col justify-center">
      <DragAndDrop />
    </div>
  );
};
export default ReceiptParser;

