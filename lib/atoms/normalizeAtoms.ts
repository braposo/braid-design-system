import { Atoms } from '../themes/theme';
import CssModuleAtoms from '../themes/wireframe/atoms.css.js.d';

export default (atoms: typeof CssModuleAtoms): Atoms => ({
  color: {
    link: atoms.color_link,
    black: atoms.color_black,
    critical: atoms.color_critical,
    brandAccentForeground: atoms.color_brandAccentForeground,
    formAccent: atoms.color_formAccent,
    neutral: atoms.color_neutral,
    positive: atoms.color_positive,
    secondary: atoms.color_secondary,
    white: atoms.color_white,
  },
  displayDesktop: {
    block: atoms.displayDesktop_block,
    flex: atoms.displayDesktop_flex,
    inline: atoms.displayDesktop_inline,
    inlineBlock: atoms.displayDesktop_inlineBlock,
    none: atoms.displayDesktop_none,
  },
  display: {
    block: atoms.display_block,
    flex: atoms.display_flex,
    inline: atoms.display_inline,
    inlineBlock: atoms.display_inlineBlock,
    none: atoms.display_none,
  },
  fill: {
    critical: atoms.fill_critical,
    currentColor: atoms.fill_currentColor,
    formAccent: atoms.fill_formAccent,
    formAccentDisabled: atoms.fill_formAccentDisabled,
    positive: atoms.fill_positive,
    secondary: atoms.fill_secondary,
    white: atoms.fill_white,
  },
  fontFamily: {
    text: atoms.fontFamily_text,
  },
  fontSize: {
    large: atoms.fontSize_large,
    level1: atoms.fontSize_level1,
    level2: atoms.fontSize_level2,
    level3: atoms.fontSize_level3,
    standard: atoms.fontSize_standard,
  },
  fontWeight: {
    medium: atoms.fontWeight_medium,
    regular: atoms.fontWeight_regular,
    strong: atoms.fontWeight_strong,
  },
  height: {
    largeText: atoms.height_largeText,
    largeTextInline: atoms.height_largeTextInline,
    standardText: atoms.height_standardText,
    standardTextInline: atoms.height_standardTextInline,
  },
  minHeight: {
    largeText: atoms.minHeight_largeText,
    largeTextInline: atoms.minHeight_largeTextInline,
    standardText: atoms.minHeight_standardText,
    standardTextInline: atoms.minHeight_standardTextInline,
  },
  paddingBottom: {
    none: atoms.paddingBottom_none,
    large: atoms.paddingBottom_large,
    medium: atoms.paddingBottom_medium,
    small: atoms.paddingBottom_small,
    xlarge: atoms.paddingBottom_xlarge,
    xsmall: atoms.paddingBottom_xsmall,
    xxlarge: atoms.paddingBottom_xxlarge,
    xxsmall: atoms.paddingBottom_xxsmall,
    standardTouchableText: atoms.paddingBottom_standardTouchableText,
  },
  paddingTop: {
    none: atoms.paddingTop_none,
    large: atoms.paddingTop_large,
    medium: atoms.paddingTop_medium,
    small: atoms.paddingTop_small,
    xlarge: atoms.paddingTop_xlarge,
    xsmall: atoms.paddingTop_xsmall,
    xxlarge: atoms.paddingTop_xxlarge,
    xxsmall: atoms.paddingTop_xxsmall,
    standardTouchableText: atoms.paddingTop_standardTouchableText,
  },
  paddingLeft: {
    none: atoms.paddingLeft_none,
    gutter: atoms.paddingLeft_gutter,
    large: atoms.paddingLeft_large,
    medium: atoms.paddingLeft_medium,
    small: atoms.paddingLeft_small,
    xlarge: atoms.paddingLeft_xlarge,
    xsmall: atoms.paddingLeft_xsmall,
    xxlarge: atoms.paddingLeft_xxlarge,
    xxsmall: atoms.paddingLeft_xxsmall,
  },
  paddingRight: {
    none: atoms.paddingRight_none,
    gutter: atoms.paddingRight_gutter,
    large: atoms.paddingRight_large,
    medium: atoms.paddingRight_medium,
    small: atoms.paddingRight_small,
    xlarge: atoms.paddingRight_xlarge,
    xsmall: atoms.paddingRight_xsmall,
    xxlarge: atoms.paddingRight_xxlarge,
    xxsmall: atoms.paddingRight_xxsmall,
  },
  paddingBottomDesktop: {
    none: atoms.paddingBottomDesktop_none,
    large: atoms.paddingBottomDesktop_large,
    medium: atoms.paddingBottomDesktop_medium,
    small: atoms.paddingBottomDesktop_small,
    xlarge: atoms.paddingBottomDesktop_xlarge,
    xsmall: atoms.paddingBottomDesktop_xsmall,
    xxlarge: atoms.paddingBottomDesktop_xxlarge,
    xxsmall: atoms.paddingBottomDesktop_xxsmall,
    standardTouchableText: atoms.paddingBottom_standardTouchableText,
  },
  paddingTopDesktop: {
    none: atoms.paddingTopDesktop_none,
    large: atoms.paddingTopDesktop_large,
    medium: atoms.paddingTopDesktop_medium,
    small: atoms.paddingTopDesktop_small,
    xlarge: atoms.paddingTopDesktop_xlarge,
    xsmall: atoms.paddingTopDesktop_xsmall,
    xxlarge: atoms.paddingTopDesktop_xxlarge,
    xxsmall: atoms.paddingTopDesktop_xxsmall,
    standardTouchableText: atoms.paddingTopDesktop_standardTouchableText,
  },
  paddingLeftDesktop: {
    none: atoms.paddingLeftDesktop_none,
    gutter: atoms.paddingLeftDesktop_gutter,
    large: atoms.paddingLeftDesktop_large,
    medium: atoms.paddingLeftDesktop_medium,
    small: atoms.paddingLeftDesktop_small,
    xlarge: atoms.paddingLeftDesktop_xlarge,
    xsmall: atoms.paddingLeftDesktop_xsmall,
    xxlarge: atoms.paddingLeftDesktop_xxlarge,
    xxsmall: atoms.paddingLeftDesktop_xxsmall,
  },
  paddingRightDesktop: {
    none: atoms.paddingRightDesktop_none,
    gutter: atoms.paddingRightDesktop_gutter,
    large: atoms.paddingRightDesktop_large,
    medium: atoms.paddingRightDesktop_medium,
    small: atoms.paddingRightDesktop_small,
    xlarge: atoms.paddingRightDesktop_xlarge,
    xsmall: atoms.paddingRightDesktop_xsmall,
    xxlarge: atoms.paddingRightDesktop_xxlarge,
    xxsmall: atoms.paddingRightDesktop_xxsmall,
  },
  transform: {
    largeText: atoms.transform_largeText,
    level1Heading: atoms.transform_level1Heading,
    level2Heading: atoms.transform_level2Heading,
    level3Heading: atoms.transform_level3Heading,
    standardText: atoms.transform_standardText,
    touchable: atoms.transform_touchable,
  },
  width: {
    largeText: atoms.width_largeText,
    largeTextInline: atoms.width_largeTextInline,
    standardText: atoms.width_standardText,
    standardTextInline: atoms.width_standardTextInline,
    full: atoms.width_full,
  },
  flexDirection: {
    row: atoms.flexDirection_row,
    column: atoms.flexDirection_column,
  },
  flexDirectionDesktop: {
    row: atoms.flexDirectionDesktop_row,
    column: atoms.flexDirectionDesktop_column,
  },
});
