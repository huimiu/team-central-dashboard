import { mergeStyles } from "@fluentui/react";
import { tokens } from "@fluentui/react-components";

export const bodyStyle = mergeStyles({
  display: "grid",
  gap: "0.5rem",
  alignContent: "start",
  "& div": {
    display: "grid",
  },
  "& .divider": {
    margin: "0 -2rem 0.5rem",
    height: "1px",
    background: tokens.colorNeutralStroke2,
  },
  "& .title": {
    fontWeight: tokens.fontWeightSemibold,
  },
  "& .content": {
    fontSize: tokens.fontSizeBase200,
  },
});
