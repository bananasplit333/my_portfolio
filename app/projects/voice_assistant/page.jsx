'use client';

import Button from '@/components/Button';
import ActiveCallDetail from '../../../components/ai_assistant/ActiveCallDetails';
import { useEffect, useState } from 'react';
import Vapi from "@vapi-ai/web"
import { isPublicKeyMissingError } from './utils';
import VapiWidget from './utils/vapi_widget';

const assistantOptions = {
    name: "Vapi’s Pizza Front Desk",
    firstMessage: "Vappy’s Pizzeria speaking, how can I help you?",
    transcriber: {
      provider: "deepgram",
      model: "nova-2",
      language: "en-US",
    },
    voice: {
      provider: "playht",
      voiceId: "jennifer",
    },
    model: {
      provider: "openai",
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: `You are a voice assistant for Vappy’s Pizzeria, a pizza shop located on the Internet.
  
  Your job is to take the order of customers calling in. The menu has only 3 types
  of items: pizza, sides, and drinks. There are no other types of items on the menu.
  
  1) There are 3 kinds of pizza: cheese pizza, pepperoni pizza, and vegetarian pizza
  (often called "veggie" pizza).
  2) There are 3 kinds of sides: french fries, garlic bread, and chicken wings.
  3) There are 2 kinds of drinks: soda, and water. (if a customer asks for a
  brand name like "coca cola", just let them know that we only offer "soda")
  
  Customers can only order 1 of each item. If a customer tries to order more
  than 1 item within each category, politely inform them that only 1 item per
  category may be ordered.
  
  Customers must order 1 item from at least 1 category to have a complete order.
  They can order just a pizza, or just a side, or just a drink.
  
  Be sure to introduce the menu items, don't assume that the caller knows what
  is on the menu (most appropriate at the start of the conversation).
  
  If the customer goes off-topic or off-track and talks about anything but the
  process of ordering, politely steer the conversation back to collecting their order.
  
  Once you have all the information you need pertaining to their order, you can
  end the conversation. You can say something like "Awesome, we'll have that ready
  for you in 10-20 minutes." to naturally let the customer know the order has been
  fully communicated.
  
  It is important that you collect the order in an efficient manner (succinct replies
  & direct questions). You only have 1 task here, and it is to collect the customers
  order, then end the conversation.
  
  - Be sure to be kind of funny and witty!
  - Keep all your responses short and simple. Use casual language, phrases like "Umm...", "Well...", and "I mean" are preferred.
  - This is a voice conversation, so keep your responses short, like in a real conversation. Don't ramble for too long.`,
        },
      ],
    },
  };

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
        <p>Hi</p>
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
