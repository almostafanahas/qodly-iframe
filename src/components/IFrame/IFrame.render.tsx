import { useRenderer, useSources } from '@ws-ui/webform-editor';
import cn from 'classnames';
import { FC, HTMLAttributeReferrerPolicy, useEffect, useState } from 'react';

import { IIFrameProps } from './IFrame.config';

const IFrame: FC<IIFrameProps> = ({
  name,
  height,
  width,
  allowFullscreen,
  allow = [{ permission: '' }],
  referrerpolicy,
  sandbox = [{ permission: '' }],
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

    const listener = async () => {
      const v = await ds.getValue<string>();
      setValue(v);
    };

    listener();

    ds.addListener('changed', listener);

    return () => {
      ds.removeListener('changed', listener);
    };
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

  let list: string[] = [];
  const processArray = (arr: { permission: string }[], separator = '') => {
    arr.forEach((element) => {
      list.push(element.permission);
    });
    return list.join(separator);
  };

  return (
    <span ref={connect} style={style} className={cn(className, classNames)}>
      <iframe
        style={{ border: 'solid 1px gray' }}
        name={value}
        src={value}
        height={height}
        width={width}
        allow={processArray(allow, ';')}
        allowFullScreen={allowFullscreen}
        referrerPolicy={referrerPolicyVar}
        sandbox={processArray(sandbox, ' ')}
        loading={loading}
      />
    </span>
  );
};

export default IFrame;
