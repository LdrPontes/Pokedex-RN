import { Dimensions, PixelRatio } from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 680;

export const scaleSize = (size: number) =>
  (WINDOW_WIDTH / guidelineBaseWidth) * size;

export const verticalScale = (size: number) =>
  (WINDOW_HEIGHT / guidelineBaseHeight) * size;

export const scaleFont = (size: number) => size * PixelRatio.getFontScale();
