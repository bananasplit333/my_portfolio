'use client';

import Button from '@/components/Button';
import ActiveCallDetail from '../../../components/ai_assistant/ActiveCallDetails';
import { useEffect, useState } from 'react';
import Vapi from "@vapi-ai/web"
import VolumeLevel from '@/components/ai_assistant/call/VolumeLevel';
const vapi = new Vapi("970f9762-4192-4a91-8767-966e522385c3")

function VoiceAI() {
    const [isLoading, setIsLoading] = useState(false); 
    const [connecting, setConnecting] = useState(false);
    const [connected, setConnected] = useState(false);

    const [assistantIsSpeaking, setAssistantIsSpeaking] = useState(false);
    const [volumeLevel, setVolumeLevel] = useState(0);


    
   // hook into Vapi events
    useEffect(() => {
    vapi.on("call-start", () => {
      setConnecting(false);
      setConnected(true);
      console.log("CALL STARTED.")

    });
    
    vapi.on("call-end", () => {
      setConnecting(false);
      setConnected(false);
      console.log("ENDED CALL")
    });

    vapi.on("speech-start", () => {
      setIsLoading(false)
      setAssistantIsSpeaking(true);
    });

    vapi.on("speech-end", () => {
      setAssistantIsSpeaking(false);
    });

    vapi.on("volume-level", (level) => {
      setVolumeLevel(level);
    });

    vapi.on("error", (error) => {
      console.error(error);
      console.log("error connecting")
      setConnecting(false);
    });

    // we only want this to fire on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    // call start handler
    const handleClick = async () => {
      if (connected) {
        setIsLoading(false);
        vapi.stop();
      } else {
        setIsLoading(true);
        try {
          console.log("BUTTON PRESSED, CONNECTING....");
          vapi.start("2b21847b-8524-4d08-b2af-6474a218fe8f");
          setConnecting(true);
        } catch (error) {
          console.log('Error: ', error);
          setIsLoading(false);
        }
      }
    };
    
    const endCall = () => {
        setIsLoading(false);
        vapi.stop();
    };
            
    return (
      <>
        <div className="flex flex-col justify-center">
      
              <a href="#\\_" className="relative inline-block px-4 py-2 font-medium group" onClick={handleClick}>
                <span className="sm:w-1/6 md:w-1/6 lg:w-1/3 xl:w-1/3 max-w-48 absolute inset-0 h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 dark:bg-slate-200 bg-gray-600 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="sm:w-1/6 md:w-1/6 lg:w-1/3 xl:w-1/3 max-w-48 dark:bg-gray-900 dark:group-hover:bg-slate-200 absolute inset-0 h-full bg-white border-2 group-hover:bg-black border-gray ease-linear duration-100 transition-all"></span>
                <span className="relative dark:text-white dark:group-hover:text-black text-black text-sm group-hover:text-white">
                  {isLoading ? (
                    <div className="flex items-center">
                      <div className="pr-2">
                        <svg aria-hidden="true" class="w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                        </svg>
                      </div>
                      Loading...
                    </div>
                  ) : connected? (
                    <div className="h-full">
                      <VolumeLevel volume={volumeLevel} />
                    </div>
                  ) : (
                    
                    <>
                      <span className="hidden xs:hidden sm:hidden md:hidden lg:block xl:block">
                        Try My Voice Assistant!
                      </span>
                      <span className="block xs:hidden sm:block md:block lg:hidden xl:hidden">
                        Try My AI!
                      </span>
                    </>
                  )}
                </span>
              </a>
        </div>
      </>
    );


}

export default VoiceAI;
