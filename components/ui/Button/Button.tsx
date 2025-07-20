"use client";
import React, { useState } from "react";
import {
  SizeButton,
  VariantButton,
  getButtonStyle,
} from "@component/ui/Button/Button.style";

type ButtonProps = {
  size?: SizeButton;
  variant?: VariantButton;
  text: string;
  viewStyle?: React.CSSProperties;
  accessibilityLabel?: string;
  onClick?: () => void;
};

export default function Button({
  size = "md",
  variant = "primary",
  text,
  viewStyle,
  accessibilityLabel,
  onClick,
}: ButtonProps) {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const buttonStyle = {
    ...getButtonStyle(size, variant, clicked, hovered),
    ...viewStyle,
  };
  return (
    <button
      style={buttonStyle}
      aria-label={accessibilityLabel || text}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setClicked(false); // reset clicked quand souris sort
      }}
      onMouseDown={() => setClicked(true)} // click appuyé
      onMouseUp={() => setClicked(false)} // click relâché
      onBlur={() => setClicked(false)} // si focus perdu (ex : tab)
    >
      {text}
    </button>
  );
}
