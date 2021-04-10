import React from 'react';

export default function Waves() {
  return (
    <svg
      className="transition duration-300 ease-in-out delay-150"
      viewBox="0 0 1440 500"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="transition-all duration-300 ease-in-out delay-150"
        d="M0 500V166c66.436 13.094 132.873 26.188 209 31 76.127 4.812 161.946 1.344 219-13s85.343-39.562 154-44c68.657-4.438 177.681 11.903 257 28 79.319 16.097 128.932 31.95 196 34 67.068 2.05 151.59-9.7 222-18s126.705-13.15 183-18v334z"
        fill="#0f728288"
        strokeWidth="0"
      />
      <path
        className="transition-all duration-300 ease-in-out delay-150"
        d="M0 500V333c66.829 7.925 133.657 15.85 206 8 72.343-7.85 150.2-31.476 214-23 63.8 8.476 113.543 49.053 182 59 68.457 9.947 155.628-10.736 223-28 67.372-17.264 114.946-31.11 172-45s123.587-27.826 199-23c75.413 4.826 159.707 28.413 244 52v167z"
        fill="#0f7282ff"
        strokeWidth="0"
      />
    </svg>
  );
}
