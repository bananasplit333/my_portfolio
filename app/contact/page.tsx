'use client';
import Button from "@/components/Button";
import React from "react";
import { PopupButton, PopupWidget } from "react-calendly";

export default function ContactPage() {
  return (
    <>
      <div id="root" className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Contact
          </h1>
        </div>
        <PopupButton
          url="https://calendly.com/jaehyon-yoo/30min"
          rootElement={document.getElementById("root") as HTMLElement}
          text="Click here to schedule!"
        />
        <p className="pt-12">
          Want to chat? Feel free to reach out at jaehyon.yoo@gmail.com. I'd
          love to hear from you!
        </p>
      </div>
    </>
  );
}