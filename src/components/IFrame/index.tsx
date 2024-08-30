import config, { IIFrameProps } from './IFrame.config';
import { T4DComponent, useEnhancedEditor } from '@ws-ui/webform-editor';
import Build from './IFrame.build';
import Render from './IFrame.render';

const IFrame: T4DComponent<IIFrameProps> = (props) => {
  const { enabled } = useEnhancedEditor((state) => ({
    enabled: state.options.enabled,
  }));

  return enabled ? <Build {...props} /> : <Render {...props} />;
};

IFrame.craft = config.craft;
IFrame.info = config.info;
IFrame.defaultProps = config.defaultProps;

export default IFrame;
