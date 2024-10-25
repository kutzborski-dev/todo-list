const twColors = require('tailwindcss/colors');

export const light = {
  foreground: twColors.white,
  primary: twColors.sky[600],
  secondary: twColors.sky[500],
  accent: twColors.slate[300],
  body: twColors.slate[700],
  success: twColors.lime[400],
  alert: twColors.orange[400],
  danger: twColors.red[700]
}

export const dark = {
  foreground: twColors.slate[700],
  primary: twColors.violet[500],
  secondary: twColors.violet[600],
  accent: twColors.slate[300],
  body: twColors.slate[300],
  success: twColors.green[500],
  alert: twColors.orange[500],
  danger: twColors.red[700]
}