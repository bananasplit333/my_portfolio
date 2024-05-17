'use client';

import Button from '@/components/Button';
import ActiveCallDetail from '../../../components/ai_assistant/ActiveCallDetails';
import { useEffect, useState } from 'react';
import Vapi from "@vapi-ai/web"
import { isPublicKeyMissingError } from './utils';
import VapiWidget from './utils/vapi_widget';

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
    const startCallInline = () => {
        setConnecting(true);
        console.log("BUTTON PRESSED, CONNECTING....")
        vapi.start("2b21847b-8524-4d08-b2af-6474a218fe8f");
    };
    const endCall = () => {
        vapi.stop();
    };
            
    return (
        <>
        <div className="flex flex-col justify-center">
            {!connected? (
              <>
                <Button
                label="Connect"
                onClick={startCallInline}
                isLoading={connecting}
                />
              </>
            ) : (
              
                <ActiveCallDetail
                    assistantIsSpeaking={assistantIsSpeaking}
                    volumeLevel={volumeLevel}
                    onEndCallClick={endCall}
                />
            )}
            
        <VapiWidget/>
        </div>
        </>
    )



}

export default VoiceAI;
