import * as React from "react";
import useResizeHandle, { ResizeType } from "../../hooks/use-resize-handle";
import { ReactComponent as ArrowNS } from "../icons/ArrowNS.svg";
import "./ResizeHeightHandle.css";

export interface ResizeHeightHandleProps {
  onDrag?: ({ deltaY }: { deltaY?: number }) => void;
  onDragEnd?: () => void;
  children?: React.ReactNode;
}

const ResizeHeightHandle: React.FC<ResizeHeightHandleProps> = ({
  children,
  onDrag,
  onDragEnd,
}) => {
  const ref = useResizeHandle({
    onDrag,
    onDragEnd,
    resizeType: ResizeType.Height,
  });

  return (
    <div className="resize-handle resize-height-handle" ref={ref}>
      {children ? children : <ArrowNS />}
    </div>
  );
};

export default ResizeHeightHandle;
