import * as React from 'react';
import Image from 'next/image';

export default function ImageCard({
  src,
  alt,
  href,
  linkLabel,
  title,
  description,
}) {
  return (
    <div class="mx-auto px-4 pt-2 max-w-xl">
      <a href={href} aria-label={linkLabel} target="_blank">
        <div class="bg-white shadow-2xl rounded-lg mb-6 tracking-wide">
          <div class="md:flex-shrink-0">
            <Image
              src={src}
              alt={alt}
              class="w-full h-64 rounded-lg rounded-b-none"
              width={1200}
              height={800}
            />
          </div>
          <div class="px-4 py-2 my-1">
            <h2 class="font-bold text-2xl text-gray-800 tracking-normal">
              {title}
            </h2>
            <p class="text-sm text-gray-700 pr-2 mt-1">{description}</p>
          </div>
        </div>
      </a>
    </div>
  );
}
