import { scaleFont } from './../utils/dimensions';
export const Typography = {
  FONT_FAMILY_REGULAR: 'SfProDisplay-Regular',
  FONT_FAMILY_BOLD: 'SfProDisplay-Bold',
  FONT_FAMILY_MEDIUM: 'SfProDisplay-Medium',
};

export enum FontSize {
  FONT_SIZE_12 = scaleFont(12),
  FONT_SIZE_16 = scaleFont(16),
  FONT_SIZE_26 = scaleFont(26),
  FONT_SIZE_32 = scaleFont(32),
}

export enum FontWeight {
  FONT_WEIGHT_REGULAR = '400',
  FONT_WEIGHT_BOLD = '700',
  FONT_WEIGHT_NORMAL = '500',
}
