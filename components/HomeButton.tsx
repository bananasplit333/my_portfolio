import Link from "next/link";
import React from "react";

const HomeButton: React.FC = () => {
  return (
    <Link href="/projects" aria-label="Link to Home" className="hover:text-blue-500 dark:hover:text-pink-200">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
        />
      </svg>
    </Link>
  );
};

export default HomeButton;