import * as React from "react";
import useResizeHandle, { ResizeType } from "../../hooks/use-resize-handle";
import { ReactComponent as ArrowNS } from "../icons/ArrowNS.svg";
import "./ResizeHeightHandle.css";

export interface ResizeHeightHandleProps {
  children?: React.ReactNode;
  isRTL?: boolean;
  onDrag?: ({ deltaY }: { deltaY?: number }) => void;
  onDragEnd?: () => void;
  style?: React.CSSProperties;
}

const ResizeHeightHandle: React.FC<ResizeHeightHandleProps> = ({
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
    resizeType: ResizeType.Height,
  });

  return (
    <div className="resize-handle resize-height-handle" ref={ref} style={style}>
      {children ?? <ArrowNS />}
    </div>
  );
};

export default ResizeHeightHandle;
