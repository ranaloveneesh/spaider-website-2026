"use client";

import React from "react";

const AnimatedNavLink = ({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  const defaultTextColor = "text-muted";
  const hoverTextColor = "text-foreground";

  return (
    <a
      href={href}
      onClick={onClick}
      className={`group relative inline-block overflow-hidden h-5 flex items-center font-semibold uppercase text-[13px]`}
    >
      <div className="flex flex-col transition-transform duration-400 ease-out transform group-hover:-translate-y-1/2">
        <span className={defaultTextColor}>{children}</span>
        <span className={hoverTextColor}>{children}</span>
      </div>
    </a>
  );
};

export default AnimatedNavLink;
