import * as React from 'react';

export default function VideoCard({
  src,
  href,
  linkLabel,
  title,
  description,
}) {
  return (
    <div className="mx-auto px-4 pt-2 max-w-4xl">
      <a href={href} aria-label={linkLabel} target="_blank">
        <div className="bg-white shadow-2xl rounded-lg mb-6 tracking-wide">
          <div className="md:flex-shrink-0">
            <video controls className="w-full rounded-lg rounded-b-none">
              <source src={src} type="video/webm" />
            </video>
          </div>
          <div className="px-4 py-2 my-1">
            <h2 className="font-bold text-2xl text-gray-800 tracking-normal">
              {title}
            </h2>
            <p className="text-sm text-gray-700 pr-2 mt-1">{description}</p>
          </div>
        </div>
      </a>
    </div>
  );
}
