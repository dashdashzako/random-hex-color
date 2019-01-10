const COLOR_CHARACTERS = '0123456789ABCDEF';

function generateColorCode(code = ''): string {
  if (code.length === 6) {
    return code;
  }

  return generateColorCode(
    `${code}${
      COLOR_CHARACTERS[Math.floor(Math.random() * COLOR_CHARACTERS.length)]
    }`
  );
}

export function randomColor(): string {
  return `#${generateColorCode()}`;
}
