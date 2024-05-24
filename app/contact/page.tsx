'use client';
import React, { useEffect, useState } from "react";
import { PopupButton, PopupWidget } from "react-calendly";
import { RoughNotation } from 'react-rough-notation';

export default function ContactPage() {
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setRootElement(document.getElementById("calendly-root"));
  }, []);

  return (  
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Contact
          </h1>
        </div>
        
        <div>
          <p className="pt-12">
            Want to chat? Feel free to reach out at jaehyon.yoo@gmail.com, or
          <span className="pr-2"></span>
          <RoughNotation
            show
            type="box"
            color="rgba(147,197,253)"
            iterations={2}
            strokeWidth={3}
            animationDelay={50}
            animationDuration={900}
            padding={2}
            brackets='left'
          >
            {rootElement && (
              <PopupButton
                url="https://calendly.com/jaehyon-yoo/30min"
                rootElement={rootElement}
                text="schedule a call!"
                className="hover:bg-blue-200"
              />
            )}
          </RoughNotation>
          </p>
          <div id="calendly-root"></div>
        </div>
      </div>
    </>
  );
}