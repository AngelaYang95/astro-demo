import { style } from "@vanilla-extract/css";

export const lineItem = style({
  justifyContent: "space-between",
  padding: "16px 16px",
  alignItems: "center",
  borderTop: "1px solid rgba(10, 10, 10, 0.08)",
  display: "flex",
  flexDirection: "row",
  cursor: "pointer",
  margin: "0 -16px",
});

export const activeLineItem = style({
  background: "rgba(0, 100, 255, 1)",
  color: "white !important",
});

export const date = style({
  fontFamily: "Mono",
  fontSize: "14px",
  fontWeight: 400,
  letterSpacing: 0,
  lineHeight: "24px",
  textTransform: "uppercase",
});

export const label = style({
  fontFamily: "Inter",
  fontSize: "20px",
  lineHeight: "24px",
  fontWeight: 500,
  letterSpacing: "0px",
});
