import {Platform} from 'react-native';
import * as Colors from './colors';
import * as Outlines from './outlines';
import * as Sizing from './sizing';
import * as Typography from './typography';

const bar = {
  primary: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: Sizing.layout.x15,
    borderRadius: Outlines.borderRadius.base,
    backgroundColor: Colors.primary.brand,
  },
  secondary: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    padding: Sizing.layout.x10,
    borderRadius: Outlines.borderRadius.base,
  },
};

const barText = {
  primary: {
    ...Typography.fontSize.x30,
    ...Typography.fontWeight.semibold,
    color: Colors.neutral.white,
  },
  secondary: {
    ...Typography.fontSize.x10,
    ...Typography.fontWeight.regular,
    color: Colors.neutral.s500,
  },
};

const circular = {
  primary: {
    height: Sizing.layout.x30,
    width: Sizing.layout.x30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary.brand,
    borderRadius: Outlines.borderRadius.max,
  },
};

const opacity = state => {
  const opacity = state.pressed ? 0.65 : 1;
  return {opacity};
};

const applyOpacity = style => {
  return state => {
    return {
      ...style,
      ...opacity(state),
    };
  };
};

export {bar, barText, circular, applyOpacity};
