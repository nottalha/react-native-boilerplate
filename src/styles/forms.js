import * as Colors from './colors';
import * as Outlines from './outlines';
import * as Sizing from './sizing';
import * as Typography from './typography';

const input = {
  primary: {
    ...Typography.body.x30,
    lineHeight: 0,
    padding: Sizing.x20,
    borderColor: Colors.neutral.s300,
    borderWidth: Outlines.borderWidth.hairline,
    borderRadius: Outlines.borderRadius.small,
  },
};

const inputLabel = {
  primary: {
    ...Typography.subheader.x20,
    marginBottom: Sizing.x10,
  },
};

export {input, inputLabel};
