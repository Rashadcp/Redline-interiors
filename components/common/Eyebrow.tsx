import React from "react";

interface EyebrowProps {
  children: React.ReactNode;
  dark?: boolean;
}

export function Eyebrow({ children, dark = false }: EyebrowProps) {
  return (
    <p className={`eyebrow${dark ? " eyebrow-dark" : ""}`}>
      <span />
      {children}
    </p>
  );
}
