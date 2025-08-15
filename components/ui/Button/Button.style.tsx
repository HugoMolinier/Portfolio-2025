export type SizeButton = "md" | "lg";
export type VariantButton = "primary" | "secondary";

const sizeStyles = {
  md: {
    padding: "4px 10px",
  },
  lg: {
    padding: "8px 24px",
  },
};

const variantStyles = (clicked: boolean, hovered: boolean) => ({
  primary: {
    backgroundColor: clicked
      ? "rgba(81, 97, 11,0.6)"
      : hovered
      ? "#51600b"
      : "#040D4A",
    color: "#fff",
    border: "none",
  },
  secondary: {
    backgroundColor: "#ccc",
    color: "#333",
    border: "1px solid #999",
  },
});

export const getButtonStyle = (
  size: SizeButton = "md",
  variant: VariantButton = "primary",
  clicked: boolean = false,
  hovered: boolean = false
): React.CSSProperties => {
  return {
    ...sizeStyles[size],
    ...variantStyles(clicked, hovered)[variant],
    borderRadius: "25px",
    cursor: "pointer",
    gap: "8px",
    transition: "all 0.1s ease",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    width: "auto",
  };
};
