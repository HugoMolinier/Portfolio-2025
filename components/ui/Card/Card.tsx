"use client";
import React, { useState, ReactNode } from "react";
import { SizeButton, VariantButton } from "@component/ui/Button/Button.style";
import Tag from "@component/ui/Tag/Tag";
import Button from "@component/ui/Button/Button";

type CardProps = {
  tagList?: string[];
  text?: {
    minText?: string;
    title?: string;
    explain?: string;
  };
  variant?: "home" | "full";
  button?: {
    textButton: string;
    variant?: VariantButton;
    size?: SizeButton;
  };
  children?: ReactNode;
  leftImage?: string;
  background?: string;
  onClick?: () => void;
};

export default function Card({
  tagList,
  text,
  variant = "home",
  button,
  children,
  background,
  onClick,
}: CardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      style={{
        borderRadius: "8px",
        position: "relative",
        cursor: variant == "home" ? "pointer" : "default",
        background: background ?? "#fff",
        height: variant == "home" ? "416px" : "380px",
        display: "flex",
        gap: "20px",
        overflow: "hidden",
      }}
    >
      {/* Colonne de gauche - tags */}
      {variant === "home" && (
        <div
          style={{
            flexBasis: "38%",
            display: "flex",
            padding: "32px 0px 32px 32px",
            flexDirection: "column",

            justifyContent: "space-between",
            zIndex: 1,
          }}
        >
          {tagList && (
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                gap: "8px",
                flexWrap: "wrap",
              }}
            >
              {tagList.map((tag, index) => (
                <Tag key={index} text={tag} variant="project" />
              ))}
            </div>
          )}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 8,
              margin: 0,
            }}
          >
            {text?.minText && (
              <span
                className="subtext"
                style={{
                  color: "rgba(4, 13, 74, 0.5)",
                  lineHeight: "normal",
                }}
              >
                {text.minText}
              </span>
            )}
            {text?.title && <h2>{text.title}</h2>}
            {text?.explain && (
              <span className="subtext">
                {text.explain.split("\n").map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </span>
            )}
            {button && (
              <Button
                size="lg"
                text={button?.textButton}
                accessibilityLabel="Voir plus d'informations"
                onClick={onClick}
              />
            )}
          </div>
        </div>
      )}
      {variant === "full" && (
        <div
          style={{
            flexBasis: "50%",
            display: "flex",
            padding: "32px 0px 0px 0px",
            flexDirection: "column",
            justifyContent: "space-between",
            zIndex: 1,
          }}
        >
          <img
            src={"/image/engie/LEFT_pres.png"}
            alt=""
            style={{ width: "100%" }}
          />
        </div>
      )}

      {/* Colonne de droite - contenu libre */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          padding: "30px 0 0 0",
          justifyContent: "flex-start",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: -15,
            right: -15,
            transition: "transform 0.3s ease",
            transformOrigin: "bottom right",
            transform:
              hovered && variant == "home" ? "scale(1.04)" : "scale(1)",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
