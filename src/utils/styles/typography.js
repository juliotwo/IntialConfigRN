import { PixelRatio } from "react-native";

export const scaleFont = (size) => size * PixelRatio.getFontScale();

// FONT FAMILY

export const DINPRO = "DINPro";
export const DINPRO_BOLD = "DINPro-Bold";
export const DINPRO_COND = "DINPro-Cond";
export const DINPRO_COND_BOLD = "DINPro-CondBold";
export const DINPRO_COND_LIGHT = "DINPro-CondLight";
export const DINPRO_COND_MEDIUM = "DINPro-CondMedium";
export const DINPRO_LIGHT = "DINPro-Light";
export const DINPRO_MEDIUM = "DINPro-Medium";

// FONT WEIGHT
export const FONT_WEIGHT_REGULAR = "400";
export const FONT_WEIGHT_BOLD = "700";

// FONT SIZE
export const FONT_SIZE_16 = scaleFont(16);
export const FONT_SIZE_14 = scaleFont(14);
export const FONT_SIZE_12 = scaleFont(12);

// LINE HEIGHT
export const LINE_HEIGHT_24 = scaleFont(24);
export const LINE_HEIGHT_20 = scaleFont(20);
export const LINE_HEIGHT_16 = scaleFont(16);
