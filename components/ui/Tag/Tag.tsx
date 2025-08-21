import React, { useMemo, useState, useEffect } from "react";
import { getStyles, VariantTag } from "./Tag.style";
import Icon from "@component/ui/Icon/Icon";
import { n } from "node_modules/framer-motion/dist/types.d-Cjd591yU";
type CardTagProps = {
  text?: string;
  variant?: VariantTag;
  icon?: boolean;
  viewStyle?: React.CSSProperties;
  sizeIcon?: number;
};

export default function Tag({
  text = "",
  variant = "discorvery",
  icon = false,
  sizeIcon = 34,
  viewStyle,
}: CardTagProps) {
  const style = useMemo(() => getStyles(variant, icon), [variant, icon]);

  return (
    <span
      style={{
        ...style.container,
        ...viewStyle,
        paddingLeft: icon ? sizeIcon * 1.5 + "px" : "12px",
      }}
    >
      {icon && (
        <span
          className="waving-hand"
          style={{
            display: "inline-block",
            position: "absolute",
            marginTop: "-2px",
            left: "24px",
            overflow: "visible",
          }}
        >
          <Icon name={"hey"} size={sizeIcon} />
        </span>
      )}
      {text}
    </span>
  );
}
