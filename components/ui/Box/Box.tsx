"use client";

import React from "react";
import { getStyles } from "@component/ui/Box/Box.style";
import Icon from "@component/ui/Icon/Icon";
import { IconName } from "@component/ui/Icon/icons";

type BoxProps = {
  text: string;
  icon?: IconName | string; // peut être un nom connu OU un chemin
  iconPosition?: "left" | "right";
};

export default function Box({ text, icon, iconPosition = "left" }: BoxProps) {
  const style = getStyles();

  const renderIcon = () => {
    if (!icon) return null;

    // Si c'est un chemin (commence par "/", "./", "http", etc.)
    const isImagePath =
      typeof icon === "string" &&
      (icon.startsWith("/") ||
        icon.startsWith("http") ||
        icon.startsWith("./"));

    return isImagePath ? (
      <img src={icon} alt="" style={{ width: 20, height: 20 }} />
    ) : (
      <Icon name={icon as IconName} color={style.color ?? "#000"} size={20} />
    );
  };

  return (
    <div style={{ ...style, display: "flex", alignItems: "center", gap: 8 }}>
      {icon && iconPosition === "left" && renderIcon()}
      <p>{text}</p>
      {icon && iconPosition === "right" && renderIcon()}
    </div>
  );
}
