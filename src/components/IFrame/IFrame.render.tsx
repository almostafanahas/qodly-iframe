import { useRenderer, useSources } from '@ws-ui/webform-editor';
import cn from 'classnames';
import { FC, HTMLAttributeReferrerPolicy, useEffect, useState } from 'react';

import { IIFrameProps } from './IFrame.config';

const IFrame: FC<IIFrameProps> = ({
  name,
  height,
  width,
  allowFullscreen,
  allow,
  referrerpolicy,
  sandbox,
  loading,
  style,
  className,
  classNames = [],
}) => {
  const { connect } = useRenderer();
  const [value, setValue] = useState(() => name);
  const {
    sources: { datasource: ds },
  } = useSources();

  useEffect(() => {
    if (!ds) return;

    const listener = async (/* event */) => {
      const v = await ds.getValue<string>();
      setValue(v);
    };

    listener();

    ds.addListener('changed', listener);

    return () => {
      ds.removeListener('changed', listener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ds]);

  let referrerPolicyVar: HTMLAttributeReferrerPolicy = '';
  switch (referrerpolicy) {
    case 'no-referrer-when-downgrade':
      referrerPolicyVar = 'no-referrer-when-downgrade';
      break;
    case 'no-referrer':
      referrerPolicyVar = 'no-referrer';
      break;
    case 'same-origin':
      referrerPolicyVar = 'same-origin';
      break;
    case 'origin':
      referrerPolicyVar = 'origin';
      break;
    case 'origin-when-cross-origin':
      referrerPolicyVar = 'origin-when-cross-origin';
      break;
    case 'strict-origin-when-cross-origin':
      referrerPolicyVar = 'strict-origin-when-cross-origin';
      break;
    case 'unsafe-url':
      referrerPolicyVar = 'unsafe-url';
      break;
    default:
      referrerPolicyVar = '';
  }

  return (
    <span ref={connect} style={style} className={cn(className, classNames)}>
      <iframe
        style={{ border: 'solid 1px gray' }}
        name={value}
        src={value}
        height={height}
        width={width}
        allow={allow?.join(';')}
        allowFullScreen={allowFullscreen}
        referrerPolicy={referrerPolicyVar}
        sandbox={sandbox}
        loading={loading}
      />
    </span>
  );
};

export default IFrame;
