import React, { useMemo, useState, useEffect } from "react";
import { getStyles, VariantTag } from "./Tag.style";
import Icon from "@component/ui/Icon/Icon";
type CardTagProps = {
  text?: string;
  variant?: VariantTag;
  icon?: boolean;
  viewStyle?: React.CSSProperties;
};

export default function Tag({
  text = "",
  variant = "discorvery",
  icon = false,
  viewStyle,
}: CardTagProps) {
  const style = useMemo(() => getStyles(variant, icon), [variant, icon]);

  return (
    <span
      style={{
        ...style.container,
        ...viewStyle,
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
          <Icon name={"hey"} size={34} />
        </span>
      )}
      {text}
    </span>
  );
}
