export const asciiArtTypes = ["dj", "computer", "vinyl"] as const;
export type AsciiArtType = (typeof asciiArtTypes)[number];
