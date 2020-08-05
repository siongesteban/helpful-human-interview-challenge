import Values from 'values.js';

export const generateColorShades = (color: string): string[] => {
  let colors: string[] = new Values(color)
    .shades()
    .map((shade: { hexString: () => string }) => shade.hexString());

  colors.splice(5);

  return colors;
};
