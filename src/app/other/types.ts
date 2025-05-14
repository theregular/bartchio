export const asciiArtTypes = ["dj", "computer", "vinyl", "question"] as const;
export type AsciiArtType = (typeof asciiArtTypes)[number];
