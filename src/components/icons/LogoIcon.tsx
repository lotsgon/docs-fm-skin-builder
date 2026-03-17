"use client";

import FMSBIcon from "./FMSB-Icon.svg";

interface LogoIconProps {
  className?: string;
}

export function LogoIcon({ className }: LogoIconProps) {
  return (
    <span className="logo-icon">
      <FMSBIcon className={className} />
    </span>
  );
}
