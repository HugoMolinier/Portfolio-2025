export type SizeButton = "md" | "lg";
export type VariantButton = "primary" | "secondary";

const sizeStyles = {
  md: {
    padding: "5px 14px",
    fontSize: "14px",
  },
  lg: {
    padding: "8px 20px",
    fontSize: "14px",
    fontWeight: "600",
  },
};

const variantStyles = (clicked: boolean, hovered: boolean) => ({
  primary: {
    backgroundColor: clicked ? "#8990C1" : hovered ? "#06136F" : "#040D4A",
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
    transition: "all 0.1s ease",
  };
};
