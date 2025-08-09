"use client";
import React, { useState } from "react";

type CardTagProps = {
  text?: string;
};

export default function CardTag({ text = "" }: CardTagProps) {
  return (
    <span
      className={"mintext"}
      style={{
        padding: "4px 12px",
        borderRadius: "8px",
        lineHeight: "14px",
        opacity: 0.9,
        border: "1px solid #040D4A",
      }}
    >
      {text}
    </span>
  );
}
