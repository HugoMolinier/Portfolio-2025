"use client";
import React from "react";
import { icons, IconName } from "./icons";

interface IconProps {
  name: IconName;
  size?: number;
  color?: string;
  className?: string;
}

export default function Icon({
  name,
  size = 20,
  color = "#000",
  className,
}: IconProps) {
  const SvgIcon = icons[name];
  return SvgIcon ? (
    <SvgIcon size={size} color={color} className={className} />
  ) : null;
}
