export const jn = (...args: (string | undefined)[]) =>
  args
    .filter((arg) => arg !== undefined)
    .join(" ")
    .trim();
