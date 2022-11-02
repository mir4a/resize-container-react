import * as React from "react";
import useResizeHandle, { ResizeType } from "../../hooks/use-resize-handle";
import { ReactComponent as ArrowNWSE } from "../icons/ArrowNWSE.svg";
import { ReactComponent as ArrowSWNE } from "../icons/ArrowSWNE.svg";
import "./ResizeBothHandle.css";

export interface ResizeBothHandleProps {
  children?: React.ReactNode;
  isRTL?: boolean;
  onDrag?: ({ deltaX, deltaY }: { deltaX?: number; deltaY?: number }) => void;
  onDragEnd?: () => void;
  style?: React.CSSProperties;
}

const ResizeBothHandle: React.FC<ResizeBothHandleProps> = ({
  children,
  isRTL = false,
  onDrag,
  onDragEnd,
  style,
}) => {
  const ref = useResizeHandle({
    isRTL,
    onDrag,
    onDragEnd,
    resizeType: ResizeType.Both,
  });
  const icon = isRTL ? <ArrowSWNE /> : <ArrowNWSE />;
  const classNames = ["resize-handle", "resize-both-handle", isRTL && "rtl"]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={classNames}
      ref={ref}
      data-testid="resize-both-handle"
      style={style}
    >
      {children ?? icon}
    </div>
  );
};

export default ResizeBothHandle;
