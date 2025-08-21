import React, { useState } from "react";

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
  children?: string;
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

  leftImage,

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

        cursor: variant === "home" ? "pointer" : "default",

        background: background ?? "#fff",

        maxHeight: variant === "home" ? "424px" : "380px",

        height: "auto",

        display: "flex",
        paddingTop: "32px",

        gap: "0px",

        flexWrap: "wrap",

        overflow: "hidden",
      }}
    >
      {/* Colonne de gauche - tags */}
      {variant === "home" && (
        <div
          style={{
            flex: "1 1 32%",

            minWidth: "300px",

            height: "auto",

            display: "flex",

            padding: "0 32px 32px 32px",

            gap: "16px",

            flexDirection: "column",

            justifyContent: "space-between",
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
            {text?.explain && <span className="subtext">{text?.explain}</span>}

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
            flex: "1 1 50%",
          }}
        >
          <img src={leftImage} alt="" style={{ width: "100%" }} />
        </div>
      )}
      {/* Colonne de droite - l'image */}
      <div
        style={{
          flex: "1 1 50%",

          position: "relative",

          display: "flex",

          justifyContent: "flex-end",

          marginTop: "auto",
        }}
      >
        <img
          src={children}
          alt=""
          style={{
            maxWidth: "98%",

            maxHeight: "90%",

            height: "auto",

            width: "auto",

            objectFit: "contain",

            transition: "transform 0.3s ease",

            transformOrigin: "bottom right",

            transform:
              hovered && variant === "home" ? "scale(1.03)" : "scale(1)",
          }}
        />
      </div>
    </div>
  );
}
