"use client";
import React, { useState } from "react";
import {
  SizeButton,
  VariantButton,
  getButtonStyle,
} from "@component/ui/Button/Button.style";

import Icon from "@component/ui/Icon/Icon";
import { IconName } from "@component/ui/Icon/icons";
type ButtonProps = {
  size?: SizeButton;
  variant?: VariantButton;
  text: string;
  viewStyle?: React.CSSProperties;
  accessibilityLabel?: string;
  onClick?: () => void;
  icon?: IconName;
  iconPosition?: "left" | "right";
};

export default function Button({
  size = "md",
  variant = "primary",
  text,
  viewStyle,
  accessibilityLabel,
  onClick,
  icon,
  iconPosition = "left",
}: ButtonProps) {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const buttonStyle = {
    ...getButtonStyle(size, variant, clicked, hovered),
    ...viewStyle,
  };
  return (
    <div>
      <button
        style={buttonStyle}
        aria-label={accessibilityLabel || text}
        onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => {
          setHovered(false);
          setClicked(false);
        }}
        onMouseDown={() => setClicked(true)}
        onMouseUp={() => setClicked(false)}
        onBlur={() => setClicked(false)}
      >
        {icon && iconPosition === "left" && (
          <Icon name={icon} color={buttonStyle.color} size={14} />
        )}
        <span className={"subText"} style={{ color: buttonStyle.color }}>
          {text}
        </span>
        {icon && iconPosition === "right" && (
          <Icon name={icon} color={buttonStyle.color} size={18} />
        )}
      </button>
    </div>
  );
}
