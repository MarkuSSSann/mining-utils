export const divideAndCapitalize = (text: string) =>
  text
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (char) => char.toUpperCase())
    .trim();
