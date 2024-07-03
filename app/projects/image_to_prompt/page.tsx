'use client'

import { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { ImageUp } from 'lucide-react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import HomeButton from '@/components/HomeButton'
import { MultiStepLoader as Loader } from '@/components/ui/multi-step-loader'
type uploadMessages = 'success' | 'error' | 'uploading' | ''

const loadingStates = [ 
  {
    text: "Importing...",
  },
  {
    text: "Analyzing...",
  }, 
  {
    text: "Extracting data...",
  },
  {
    text: "Fine-tuning details...",
  }
]


export default function ImageToPrompt() {
  const TEST_URL = 'http://127.0.0.1:5000/reverse'
  const [uploadState, setUploadState] = useState<uploadMessages>('')
  const [promptText, setPromptText] = useState<string>('')
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
      if (response.ok) {
        console.log(response.text)
        setPromptText(await response.text())
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

  const handleClick = (text:string) => {
      navigator.clipboard.writeText(text.replace(/['"]/g, ''))
        .then(() => {
          alert('Text copied');
          console.log('Text copied to clipboard');
        })
        .catch((err) => {
          console.error('Failed to copy text: ', err);
        });
  } 
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
            <p className="text-lg">Drag & drop here, or</p>
            <ImageUp className="my-4 h-[60px] w-[60px]" />
            <button className="text-lg">Browse Files</button>
          </div>
        )}
      </div>
      {uploadState == 'uploading' && (
        <div className="h-[300px] w-[300px]">
          <Loader loadingStates={loadingStates} loading={uploadState == 'uploading'} duration={1000}/>
        </div>
      )}
      {uploadState == 'success' && (
        <div className="items-center text-center">
          <h1 className="text-2xl pb-12">Your Prompt</h1>
          <p className="pb-4 cursor-pointer hover:underline"  onClick={() => handleClick(promptText)}>{promptText}</p>
          <button
            className="text-lg hover:text-cyan-700 dark:hover:text-fuchsia-200"
            onClick={() => (setPromptText(''), setUploadState(''))}
          >
            upload another image
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
