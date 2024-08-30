import { useEnhancedNode } from '@ws-ui/webform-editor';
import cn from 'classnames';
import { FC } from 'react';
import { IIFrameProps } from './IFrame.config';

import { BsFillInfoCircleFill } from 'react-icons/bs';

const IFrame: FC<IIFrameProps> = ({
  datasource,
  srcdoc,
  name,
  height,
  width,
  style,
  className,
  classNames = [],
}) => {
  const {
    connectors: { connect },
  } = useEnhancedNode();

  return (
    <div ref={connect} style={{ padding: 10, ...style }} className={cn(className, classNames)}>
      {datasource ? (
        <iframe
          style={{ border: 'solid 1px gray' }}
          srcDoc={srcdoc}
          name={name}
          height={height}
          width={width}
        />
      ) : (
        <div className="flex h-24 w-full flex-col items-center justify-center gap-2 rounded-lg border bg-purple-400 py-4 text-white">
          <BsFillInfoCircleFill className=" h-6 w-6" />
          <p className=" font-medium">Please attach a datasource</p>
        </div>
      )}
    </div>
  );
};

export default IFrame;
