export type VariantTag = "discorvery" | "project";

function getStylesVariant(variant: VariantTag) {
  switch (variant) {
    case "project":
      return {
        backgroundColor: "rgba(3,15,75,0.05)",
        fontSize: "12px",
        padding: "6px 12px",
      };
    case "discorvery":
    default:
      return {
        backgroundColor: "rgba(3,15,75,0.05)",
        fontSize: "16px",
        padding: "8px 16px",
      };
  }
}

export function getStyles(variant: VariantTag, icon: boolean) {
  return {
    container: {
      display: "inline-flex",
      alignItems: "center",      paddingLeft: icon ? "48px" : undefined,
      borderRadius: "25px",
      gap: "8px",
      boxShadow: "0 1px 1px rgba(0, 0, 0, 0.25)",
      ...getStylesVariant(variant),

    },
  };
}
