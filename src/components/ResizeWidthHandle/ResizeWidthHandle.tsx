import * as React from "react";
import useResizeHandle, { ResizeType } from "../../hooks/use-resize-handle";
import { ReactComponent as ArrowWE } from "../icons/ArrowWE.svg";
import "./ResizeWidthHandle.css";

export interface ResizeWidthHandleProps {
  onDrag?: ({ deltaX }: { deltaX?: number }) => void;
  onDragEnd?: () => void;
  children?: React.ReactNode;
}

const ResizeWidthHandle: React.FC<ResizeWidthHandleProps> = ({
  children,
  onDrag,
  onDragEnd,
}) => {
  const ref = useResizeHandle({
    onDrag,
    onDragEnd,
    resizeType: ResizeType.Width,
  });

  return (
    <div className="resize-handle resize-width-handle" ref={ref}>
      {children ?? <ArrowWE />}
    </div>
  );
};

export default ResizeWidthHandle;
