import { Platform } from "react-native";
import { systemWeights } from "react-native-typography";
import * as Colors from "./colors";

const fontSize = {
  x10: {
    fontSize: 13,
  },
  x20: {
    fontSize: 14,
  },
  x30: {
    fontSize: 16,
  },
  x40: {
    fontSize: 19,
  },
  x50: {
    fontSize: 24,
  },
  x60: {
    fontSize: 32,
  },
  x70: {
    fontSize: 38,
  },
};

const fontWeight = {
  regular: {
    ...systemWeights.regular,
  },
  semibold: {
    ...systemWeights.semibold,
  },
  bold: {
    ...systemWeights.bold,
  },
};

const letterSpacing = {
  x30: 2,
  x40: 3,
};

const lineHeight = {
  x10: {
    lineHeight: 20,
  },
  x20: {
    lineHeight: 22,
  },
  x30: {
    lineHeight: 24,
  },
  x40: {
    lineHeight: 26,
  },
  x50: {
    lineHeight: 32,
  },
  x60: {
    lineHeight: 38,
  },
  x70: {
    lineHeight: 44,
  },
};

const header = {
  x10: {
    ...fontSize.x10,
    ...lineHeight.x10,
    ...fontWeight.bold,
  },
  x20: {
    ...fontSize.x20,
    ...lineHeight.x20,
    ...fontWeight.bold,
  },
  x30: {
    ...fontSize.x30,
    ...lineHeight.x30,
    ...fontWeight.bold,
  },
  x40: {
    ...fontSize.x40,
    ...lineHeight.x40,
    ...fontWeight.bold,
  },
  x50: {
    ...fontSize.x50,
    ...lineHeight.x50,
    ...fontWeight.bold,
  },
  x60: {
    ...fontSize.x60,
    ...lineHeight.x60,
    ...fontWeight.bold,
  },
  x70: {
    ...fontSize.x70,
    ...lineHeight.x70,
    ...fontWeight.bold,
  },
};

const subheader = {
  x10: {
    ...fontSize.x10,
    ...lineHeight.x10,
    ...fontWeight.semibold,
  },
  x20: {
    ...fontSize.x20,
    ...lineHeight.x20,
    ...fontWeight.semibold,
  },
  x30: {
    ...fontSize.x30,
    ...lineHeight.x30,
    ...fontWeight.semibold,
  },
  x40: {
    ...fontSize.x40,
    ...lineHeight.x40,
    ...fontWeight.semibold,
  },
  x50: {
    ...fontSize.x50,
    ...lineHeight.x50,
    ...fontWeight.semibold,
  },
};

const body = {
  x10: {
    ...fontSize.x10,
    ...lineHeight.x10,
    ...fontWeight.regular,
    color: Colors.neutral.s800,
  },
  x20: {
    ...fontSize.x20,
    ...lineHeight.x20,
    ...fontWeight.regular,
    color: Colors.neutral.s800,
  },
  x30: {
    ...fontSize.x30,
    ...lineHeight.x30,
    ...fontWeight.regular,
    color: Colors.neutral.s800,
  },
  x40: {
    ...fontSize.x40,
    ...lineHeight.x40,
    ...fontWeight.regular,
    color: Colors.neutral.s800,
  },
  x50: {
    ...fontSize.x50,
    ...lineHeight.x50,
    ...fontWeight.regular,
    color: Colors.neutral.s800,
  },
};

const monospaceFontFamily = Platform.select({
  ios: "Menlo",
  android: "monospace",
});

const monospace = {
  base: {
    fontFamily: monospaceFontFamily,
    letterSpacing: letterSpacing.x30,
  },
};

export { fontSize, fontWeight, letterSpacing, lineHeight, header, subheader, body, monospace };
