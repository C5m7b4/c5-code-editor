import { ColorObject, colors } from './colors';

export const findColor = (colorName: string): string => {
  const color: ColorObject = colors.filter((c) => c.name === colorName)[0];
  if (color) {
    return color.color;
  } else {
    return '';
  }
};

export function htmlEncode(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/'/g, '&#39;')
    .replace(/"/g, '&quot;');
}
