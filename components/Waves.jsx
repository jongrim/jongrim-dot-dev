import React from 'react';

export default function Waves() {
  return (
    <svg
      className="transition duration-300 ease-in-out delay-150"
      viewBox="0 100 1440 400"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
    >
      <path
        className="transition-all duration-300 ease-in-out delay-150"
        d="M0 500V166c104.015 13.3 208.03 26.6 277 20 68.97-6.6 102.892-33.1 182-35 79.108-1.9 203.4 20.8 289 34s132.508 16.9 192 0c59.492-16.9 131.57-54.4 217-61 85.43-6.6 184.215 17.7 283 42v334z"
        fill="#58d7c988"
        strokeWidth="0"
      />
      <path
        className="transition-all duration-300 ease-in-out delay-150"
        d="M0 500V333c72.954 15.53 145.908 31.062 220 42 74.092 10.938 149.323 17.285 226-6 76.677-23.285 154.8-76.2 238-81 83.2-4.8 171.477 38.515 256 65s165.292 36.138 248 30c82.708-6.138 167.354-28.07 252-50v167z"
        fill="#58d7c9ff"
        strokeWidth="0"
      />
    </svg>
  );
}
