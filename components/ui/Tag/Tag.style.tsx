export type VariantTag = "discorvery" | "project";

function getStylesVariant(variant: VariantTag) {
  switch (variant) {
    case "project":
      return {
        backgroundColor: "rgba(3,15,75,0.05)",
        fontSize: "clamp(10px, 2vw, 12px)",
        padding: "clamp(4px, 1vw, 6px) clamp(8px, 2vw, 12px)",
      };
    case "discorvery":
    default:
      return {
        backgroundColor: "rgba(3,15,75,0.05)",
        fontSize: "clamp(14px, 2.5vw, 16px)",
        padding: "clamp(6px, 1.5vw, 8px) clamp(12px, 3vw, 16px)",
      };
  }
}

export function getStyles(variant: VariantTag, icon: boolean) {
  return {
    container: {
      display: "inline-flex",
      alignItems: "center",
      borderRadius: "25px",
      gap: "8px",
      boxShadow: "0 1px 1px rgba(0, 0, 0, 0.25)",
      ...getStylesVariant(variant),
      paddingLeft: icon ? "48px" : "12px",
    },
  };
}
