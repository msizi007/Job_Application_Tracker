// Color.ts
export const Color = {
  Black: "black",
  White: "white",
  Gray: "#888888",
  Indigo: "#5f0ab7",
  Mantis: "#7bc950",
} as const;

export type Color = (typeof Color)[keyof typeof Color];
