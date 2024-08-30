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
    events: [
      {
        label: 'On Click',
        value: 'onclick',
      },
      {
        label: 'On Blur',
        value: 'onblur',
      },
      {
        label: 'On Focus',
        value: 'onfocus',
      },
      {
        label: 'On MouseEnter',
        value: 'onmouseenter',
      },
      {
        label: 'On MouseLeave',
        value: 'onmouseleave',
      },
      {
        label: 'On KeyDown',
        value: 'onkeydown',
      },
      {
        label: 'On KeyUp',
        value: 'onkeyup',
      },
    ],
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
    allow: [],
    referrerpolicy: '',
    sandbox: '',
  },
} as T4DComponentConfig<IIFrameProps>;

export interface IIFrameProps extends webforms.ComponentProps {
  name?: string;
  srcdoc?: string;
  height?: string;
  width?: string;
  allowFullscreen?: boolean;
  allow?: string[];
  referrerpolicy?: string;
  sandbox?: string;
  loading?: 'lazy' | 'eager';
}
