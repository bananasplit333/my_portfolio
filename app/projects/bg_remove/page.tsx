'use client'

import { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { ImageUp } from 'lucide-react'
import { DotLottie, DotLottieReact } from '@lottiefiles/dotlottie-react'
import Image from 'next/image'
import HomeButton from '@/components/HomeButton'

type uploadMessages = 'success' | 'error' | 'uploading' | ''

export default function RemBg() {
  const TEST_URL = 'https://rembg.toddie.org/process_image'
  const [isUploading, setIsUploading] = useState<boolean>(false)
  const [uploadState, setUploadState] = useState<uploadMessages>('')

  const onDrop = useCallback(async (acceptedFiles) => {
    try {
      setUploadState('uploading')
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
      setIsUploading(false)
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
        setUploadState('success')
      } else {
        console.log('error during api call')
        setUploadState('error')
        return;
      }
    } catch (error) {
      setUploadState('error')
      console.error('error uploading.. ', error)
      return;
    } 
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
  })

  return (
    <div className="border-rounded flex min-h-screen w-full flex-col items-center justify-center ">
      <div className="m:right-1/4 l:right-1/4 absolute right-10 top-1/3 sm:top-1/4 xl:right-1/4">
        <HomeButton />
      </div>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive && uploadState == '' && (
          <div className="h-[300px] w-[300px]">
            <DotLottieReact src="/static/lottie_assets/upload_animation.json" loop autoplay />
            <p className="items-center text-center text-xl">Drop Here!</p>
          </div>
        )}
        {!isDragActive && uploadState == '' && (
          <div className="flex flex-col items-center text-cyan-900 dark:text-gray-300">
            <p className="text-lg">Drag & drop some files here, or</p>
            <ImageUp className="my-4 h-[60px] w-[60px]" />
            <button className="text-lg">Browse Files</button>
          </div>
        )}
      </div>
      {uploadState == 'uploading' && (
        <div className="h-[300px] w-[300px]">
          <DotLottieReact src="/static/lottie_assets/loading_animation.json" loop autoplay />
        </div>
      )}
      {uploadState == 'success' && (
        <div className="items-center text-center">
          <p className="text-2xl ">Success!</p>
          <div className="h-[300px] w-[300px]">
            <DotLottieReact
              src="/static/lottie_assets/success_animation.json"
              loop={false}
              autoplay
            />
          </div>
          <button
            className="text-lg hover:text-cyan-700 dark:hover:text-fuchsia-200"
            onClick={() => setUploadState('')}
          >
            Upload another image
          </button>
        </div>
      )}
      {uploadState == 'error' && (
        <div className="items-center text-center">
          <p className="text-2xl ">Error During Upload.</p>
          <div className="h-[300px] w-[300px]">
            <DotLottieReact src="/static/lottie_assets/error_animation.json" loop autoplay />
          </div>
          <button
            className="text-lg hover:text-cyan-700 dark:hover:text-fuchsia-200"
            onClick={() => setUploadState('')}
          >
            Upload another image
          </button>
        </div>
      )}
    </div>
  )
}

/**
return (
  <div
    {...getRootProps()}
    className="border-rounded flex min-h-screen w-full flex-col items-center justify-center "
  >
    <div className="m:right-1/4 l:right-1/4 absolute right-10 top-1/3 sm:top-1/4 xl:right-1/4">
      <HomeButton />
    </div>
    <input {...getInputProps()} />
    {isDragActive && (
      
      <div className="h-[300px] w-[300px]">
        <DotLottieReact src="/static/lottie_assets/upload_animation.json" loop autoplay />
        <p className="items-center text-center text-xl">Drop Here!</p>
      </div>
    )}
    {isUploading && (
      <div className="h-[300px] w-[300px]">
        <DotLottieReact src="/static/lottie_assets/loading_animation.json" loop autoplay />
      </div>
    )}
    {uploadState == 'success' && (
      <div className="items-center text-center">
        <p className="text-2xl ">Success!</p>
        <div className="h-[300px] w-[300px]">
          <DotLottieReact
            src="/static/lottie_assets/success_animation.json"
            loop={false}
            autoplay
          />
        </div>
        <button
          className="text-lg hover:text-cyan-700 dark:hover:text-fuchsia-200"
          onClick={() => setUploadState('')}
        >
          Upload another image
        </button>
      </div>
    )}
    {uploadState == 'error' && (
      <div className="items-center text-center">
        <p className="text-2xl ">Error During Upload.</p>
        <div className="h-[300px] w-[300px]">
          <DotLottieReact
            src="/static/lottie_assets/error_animation.json"
            loop
            autoplay
          />
        </div>
        <button
          className="text-lg hover:text-cyan-700 dark:hover:text-fuchsia-200"
          onClick={() => setUploadState('')}
        >
          Upload another image
        </button>
      </div>
    )}
    {!isDragActive && !isUploading && uploadState == '' && (
      <div className="flex flex-col items-center text-cyan-900 dark:text-gray-300">
        <p className="text-lg">Drag & drop some files here, or</p>
        <ImageUp className="my-4 h-[60px] w-[60px]" />
        <button className="text-lg">Browse Files</button>
      </div>
    )}
  </div>
)
} */
