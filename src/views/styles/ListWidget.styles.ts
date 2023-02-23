import { tokens } from "@fluentui/react-components";
import { CSSProperties } from "react";

export const bodyContentStyle = (): CSSProperties => ({
  display: "grid",
  gap: "0.5rem",
});

export const itemLayoutStyle = (): CSSProperties => ({
  display: "grid",
});

export const dividerStyle = (): CSSProperties => ({
  marginBottom: "0.5rem",
  marginLeft: "-2rem",
  marginRight: "-2rem",
  height: "1px",
  background: tokens.colorNeutralStroke2,
});

export const itemTitleStyle = (): CSSProperties => ({
  fontSize: "0.875rem",
  fontWeight: "600",
  lineHeight: "1.25rem",
});

export const itemSubtitleStyle = (): CSSProperties => ({
  fontSize: "0.75rem",
  fontWeight: "400",
  lineHeight: "1.25rem",
});
