import React from "react";

export function ArrowDown({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
      />
    </svg>
  );
}

export function ArrowSwitch({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      width="512"
      height="512"
      viewBox="0 0 36 36"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fill="currentColor"
        d="M5.71 14h15.21v-2H5.71l3.71-3.73A1 1 0 1 0 8 6.86L1.89 13L8 19.14a1 1 0 1 0 1.42-1.4Z"
        className="clr-i-outline clr-i-outline-path-1"
      />
      <path
        fill="currentColor"
        d="M23 12h3v2h-3z"
        className="clr-i-outline clr-i-outline-path-2"
      />
      <path
        fill="currentColor"
        d="M28 12h2v2h-2z"
        className="clr-i-outline clr-i-outline-path-3"
      />
      <path
        fill="currentColor"
        d="M27.92 17.86a1 1 0 0 0-1.42 1.41L30.21 23H15v2h15.21l-3.71 3.74a1 1 0 1 0 1.42 1.4L34 24Z"
        className="clr-i-outline clr-i-outline-path-4"
      />
      <path
        fill="currentColor"
        d="M10 23h3v2h-3z"
        className="clr-i-outline clr-i-outline-path-5"
      />
      <path
        fill="currentColor"
        d="M6 23h2v2H6z"
        className="clr-i-outline clr-i-outline-path-6"
      />
      <path fill="none" d="M0 0h36v36H0z" />
    </svg>
  );
}

export function ArrowUp({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
      />
    </svg>
  );
}
