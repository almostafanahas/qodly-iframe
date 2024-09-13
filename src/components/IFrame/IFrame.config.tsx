import { EComponentKind, T4DComponentConfig } from '@ws-ui/webform-editor';
import { Settings } from '@ws-ui/webform-editor';
import { PiFrameCornersBold } from 'react-icons/pi';

import IFrameSettings, { BasicSettings } from './IFrame.settings';

export default {
  craft: {
    displayName: 'IFrame',
    kind: EComponentKind.BASIC,
    props: {
      name: '',
      classNames: [],
      events: [],
    },
    related: {
      settings: Settings(IFrameSettings, BasicSettings),
    },
  },
  info: {
    displayName: 'IFrame',
    exposed: true,
    icon: PiFrameCornersBold,
    events: [],
    datasources: {
      accept: ['string'],
    },
  },
  defaultProps: {
    name: 'iframe',
    srcdoc: '<p>Hello World !<p>',
    height: '100%',
    width: '100%',
    allowFullscreen: true,
    allow: [{ permission: '' }],
    referrerpolicy: 'strict-origin-when-cross-origin',
    sandbox: [{ permission: '' }],
    loading: 'eager',
  },
} as T4DComponentConfig<IIFrameProps>;

export interface IIFrameProps extends webforms.ComponentProps {
  name?: string;
  srcdoc?: string;
  height?: string;
  width?: string;
  allowFullscreen?: boolean;
  allow?: [{ permission: string }];
  referrerpolicy?: string;
  sandbox?: [{ permission: string }];
  loading?: 'lazy' | 'eager';
}
