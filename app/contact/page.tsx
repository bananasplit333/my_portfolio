'use client';
import Button from "@/components/Button";
import Head from "next/head";
import Script from "next/script";
import React from "react";

export default function ContactPage() {
  const handleClick = () => {
    // @ts-ignore
    window.Calendly.initPopupWidget({ url: 'https://calendly.com/jaehyon-yoo' });
    return false;
  };

  return (
    <>
      <Head>
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </Head>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        type="text/javascript"
        async
        onLoad={() => {
          console.log("Calendly script loaded");
        }}
      />
      <div id="root" className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Contact
          </h1>
        </div>
        <button onClick={handleClick} >
          Schedule time with me
        </button>
        <p className="pt-12">
          Want to chat? Feel free to reach out at jaehyon.yoo@gmail.com. I'd
          love to hear from you!
        </p>
      </div>
    </>
  );
}