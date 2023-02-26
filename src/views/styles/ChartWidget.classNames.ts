import { mergeStyles, mergeStyleSets } from "@fluentui/react";
import { tokens } from "@fluentui/react-components";

export const bodyStyle = mergeStyleSets({
  selector: {
    display: "grid",
    gridTemplateColumns: "repeat(3, max-content)",
    gap: "1rem",
    "& button": {
      fontSize: tokens.fontSizeBase100,
      lineHeight: tokens.lineHeightBase100,
    },
  },
  chart: {
    position: "relative",
    height: "200px",
    width: "100%",
  },
});
