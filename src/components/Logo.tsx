/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  variant?: 'light' | 'dark' | 'white';
  height?: number | string;
}

export default function Logo({
  className = '',
  iconOnly = false,
  variant = 'dark',
  height = 50,
}: LogoProps) {
  const isDarkBg = variant === 'white';

  if (isDarkBg) {
    return (
      <div className={`bg-white p-2 px-3.5 rounded-2xl shadow-sm border border-slate-100 inline-flex items-center justify-center hover:shadow-md transition-shadow duration-300 ${className}`}>
        <img
          src="/logo.jpg"
          alt="Dr. Chart Healthcare Logo"
          style={{ height: typeof height === 'number' ? `${height}px` : height }}
          className="object-contain max-w-full"
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  return (
    <img
      src="/logo.jpg"
      alt="Dr. Chart Healthcare Logo"
      style={{ height: typeof height === 'number' ? `${height}px` : height }}
      className={`object-contain max-w-full mix-blend-multiply ${className}`}
      referrerPolicy="no-referrer"
    />
  );
}
