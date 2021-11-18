import { OverlayTrigger, Tooltip } from 'react-bootstrap';
interface ITooltipText {
  position?: "top" | "right" | "bottom" | "left";
  text: string;
  showTime?: number;
  hideTime?: number;
  children: any;
}
// eslint-disable-next-line react/prop-types
const TooltipText = ({
  position,
  text,
  children,
  showTime,
  hideTime,
}: ITooltipText) => {
  const renderTooltip = (props: any) => (
    <Tooltip id="button-tooltip" {...props}>
      {text || 'this is tooltip'}
    </Tooltip>
  );
  return (
    <OverlayTrigger
      placement={position || 'bottom'}
      delay={{ show: showTime || 250, hide: hideTime || 400 }}
      overlay={renderTooltip}
    >
      {children || 'hover'}
    </OverlayTrigger>
  );
};

export default TooltipText;
