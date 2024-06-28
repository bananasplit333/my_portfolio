'use client'

import { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { ImageUp } from 'lucide-react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function RemBg() {
  const TEST_URL = 'http://127.0.0.1:5000/process_image'
  const [img, setImg] = useState<File>()
  const [isUploading, setIsUploading] = useState<boolean>(false)
  const onDrop = useCallback(async (acceptedFiles) => {
    try {
      console.log('attempting to process img: ', acceptedFiles)

      const formData = new FormData()
      formData.append('image', acceptedFiles[0])
      console.log(formData)

      console.log('fetching....')
      const response = await fetch(TEST_URL, {
        method: 'POST',
        body: formData,
      })

      console.log('response ok')

      if (response.ok) {
        // Get the processed image as a blob
        const blob = await response.blob()

        // Create a temporary URL for the blob
        const url = window.URL.createObjectURL(blob)

        // Create a temporary anchor element
        const a = document.createElement('a')
        a.style.display = 'none'
        a.href = url

        // Set the filename for the download
        a.download = 'processed_' + acceptedFiles.name

        // Append to the body and trigger the download
        document.body.appendChild(a)
        a.click()

        // Clean up
        window.URL.revokeObjectURL(url)
        document.body.removeChild(a)
      } else {
        console.log('error during api call')
      }
    } catch (error) {
      console.error('error uploading.. ', error)
    }
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
  })

  return (
    <div
      {...getRootProps()}
      className="border-rounded flex min-h-screen w-full flex-col items-center justify-center "
    >
      
      <input {...getInputProps()} />
      {isDragActive ? (
        <p className="text-gray-300">Drop files here..</p>
      ) : (
        <div className="flex flex-col items-center text-gray-300">
          <p>Drag & drop some files here, or</p>
          <ImageUp className="my-4 h-[30px] w-[30px]" />
          <button>Browse Files</button>
        </div>
      )}
    </div>
  )
}
