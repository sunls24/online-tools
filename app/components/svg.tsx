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

export function Clipboard({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      width="512"
      height="512"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fill="currentColor"
        d="M17 4h-1.18A3 3 0 0 0 13 2h-2a3 3 0 0 0-2.82 2H7a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm-7 1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1h-4Zm8 14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1v1a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6h1a1 1 0 0 1 1 1Z"
      />
    </svg>
  );
}

export function Open({
  className = "w-6 h-6 text-primary",
}: {
  className?: string;
}) {
  return (
    <svg
      width="512"
      height="512"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fill="currentColor"
        d="M8.5 5A3.5 3.5 0 0 0 5 8.5v15A3.5 3.5 0 0 0 8.5 27h15a3.5 3.5 0 0 0 3.5-3.5V19a1 1 0 1 1 2 0v4.5a5.5 5.5 0 0 1-5.5 5.5h-15A5.5 5.5 0 0 1 3 23.5v-15A5.5 5.5 0 0 1 8.5 3H13a1 1 0 1 1 0 2H8.5ZM18 4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v9a1 1 0 1 1-2 0V6.414l-7.293 7.293a1 1 0 0 1-1.414-1.414L25.586 5H19a1 1 0 0 1-1-1Z"
      />
    </svg>
  );
}

export function Title({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      width="512"
      height="512"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fill="currentColor"
        d="M8.39 12.648a1.32 1.32 0 0 0-.015.18c0 .305.21.508.5.508c.266 0 .492-.172.555-.477l.554-2.703h1.204c.421 0 .617-.234.617-.547c0-.312-.188-.53-.617-.53h-.985l.516-2.524h1.265c.43 0 .618-.227.618-.547c0-.313-.188-.524-.618-.524h-1.046l.476-2.304a1.06 1.06 0 0 0 .016-.164a.51.51 0 0 0-.516-.516a.54.54 0 0 0-.539.43l-.523 2.554H7.617l.477-2.304c.008-.04.015-.118.015-.164a.512.512 0 0 0-.523-.516a.539.539 0 0 0-.531.43L6.53 5.484H5.414c-.43 0-.617.22-.617.532c0 .312.187.539.617.539h.906l-.515 2.523H4.609c-.421 0-.609.219-.609.531c0 .313.188.547.61.547h.976l-.516 2.492c-.008.04-.015.125-.015.18c0 .305.21.508.5.508c.265 0 .492-.172.554-.477l.555-2.703h2.242l-.515 2.492zm-1-6.109h2.266l-.515 2.563H6.859l.532-2.563z"
      />
    </svg>
  );
}
