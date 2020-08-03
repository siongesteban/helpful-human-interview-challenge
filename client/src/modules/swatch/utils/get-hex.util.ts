export const getHex = (hex: string): string =>
  hex.startsWith('#') ? hex : `#${hex}`;
