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

export function copyTextToClipboard(text: string): {
  result: boolean;
  msg: string;
} {
  const textarea = document.createElement('textarea');
  textarea.style.position = 'fixed';
  textarea.style.top = '0';
  textarea.style.left = '0';
  textarea.style.width = '2em';
  textarea.style.height = '2em';
  textarea.style.opacity = '0';
  textarea.style.zIndex = '-1';
  textarea.style.padding = '0';
  textarea.style.border = 'none';
  textarea.style.outline = 'none';
  textarea.style.boxShadow = 'none';
  textarea.style.background = 'transparent';
  textarea.value = text;

  let result = false;
  let msg = '';

  document.body.append(textarea);
  textarea.focus();
  textarea.select();
  try {
    const success = document.execCommand('copy');
    msg = success ? 'successful' : 'unsuccessful';
    result = true;
  } catch (error) {
    msg = error.message;
  }

  document.body.removeChild(textarea);
  return {
    result,
    msg,
  };
}
