'use client';

import { useEffect } from 'react';

const VapiWidget = () => {
  useEffect(() => {
    const assistant = '2b21847b-8524-4d08-b2af-6474a218fe8f'; // Substitute with your assistant ID
    const apiKey = '970f9762-4192-4a91-8767-966e522385c3'; // Substitute with your Public key from Vapi Dashboard.
    const buttonConfig = {
        position: "bottom-right", // "bottom" | "top" | "left" | "right" | "top-right" | "top-left" | "bottom-left" | "bottom-right"
        offset: "40px", // decide how far the button should be from the edge
        width: "50px", // min-width of the button
        height: "50px", // height of the button
        idle: { // button state when the call is not active.
          color: `rgb(70,130,180)`, 
          type: "pill", // or "round"
          title: "", // only required in case of Pill
          subtitle: "Try my AI assistant!", // only required in case of pill
          icon: `https://unpkg.com/lucide-static@0.321.0/icons/phone.svg`,
        },
        loading: { // button state when the call is connecting
          color: `rgb(93, 124, 202)`,
          type: "pill", // or "round"
          title: "Connecting...", // only required in case of Pill
          subtitle: "Please wait", // only required in case of pill
          icon: `https://unpkg.com/lucide-static@0.321.0/icons/loader-2.svg`,
        },
        active: { // button state when the call is in progress or active.
          color: `rgb(255, 0, 0)`,
          type: "pill", // or "round"
          title: "Call is in progress...", // only required in case of Pill
          subtitle: "End the call.", // only required in case of pill
          icon: `https://unpkg.com/lucide-static@0.321.0/icons/phone-off.svg`,
        },
      }; // Modify this as required

    console.log('Mounting VapiWidget');

    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/assets/index.js';
    script.defer = true;
    script.async = true;

    document.body.appendChild(script);

    script.onload = () => {
      window.vapiSDK.run({
        apiKey: apiKey, // mandatory
        assistant: assistant, // mandatory
        config: buttonConfig, // optional
      });
    };

    return () => {
      console.log('Unmounting VapiWidget');
      document.body.removeChild(script);
    };
  }, []); // Add an empty dependency array to ensure the effect is only run once

  return null;
};

export default VapiWidget;