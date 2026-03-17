"use client";

import { ImageIcon } from "lucide-react";

interface ScreenshotPlaceholderProps {
  id: string;
  alt: string;
  caption?: string;
}

export function ScreenshotPlaceholder({
  id,
  alt,
  caption,
}: ScreenshotPlaceholderProps) {
  return (
    <figure className="my-6">
      <div
        className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-8 dark:border-gray-700 dark:bg-gray-900"
        data-screenshot-id={id}
      >
        <ImageIcon className="mb-3 h-12 w-12 text-gray-400 dark:text-gray-600" />
        <p className="text-center text-sm text-gray-500 dark:text-gray-400">
          {alt}
        </p>
        <p className="mt-2 text-center font-mono text-xs text-gray-400 dark:text-gray-500">
          Screenshot ID: {id}
        </p>
      </div>
      {caption && (
        <figcaption className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
