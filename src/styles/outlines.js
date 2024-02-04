import {StyleSheet} from 'react-native';
import * as Colors from './colors';

const borderRadius = {
  small: 5,
  base: 10,
  large: 20,
  max: 9999,
};

const borderWidth = {
  hairline: StyleSheet.hairlineWidth,
  thin: 1,
  base: 2,
  thick: 3,
};

const shadow = {
  base: {
    shadowColor: Colors.neutral.s400,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
};

export {borderRadius, borderWidth, shadow};
