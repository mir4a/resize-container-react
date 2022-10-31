import * as React from "react";
import useResizeHandle, { ResizeType } from "../../hooks/use-resize-handle";
import { ReactComponent as ArrowNWSE } from "../icons/ArrowNWSE.svg";
import "./ResizeBothHandle.css";

export interface ResizeBothHandleProps {
  onDrag: ({ deltaX, deltaY }: { deltaX?: number; deltaY?: number }) => void;
  onDragEnd: () => void;
  children?: React.ReactNode;
}

const ResizeBothHandle: React.FC<ResizeBothHandleProps> = ({
  children,
  onDrag,
  onDragEnd,
}) => {
  const ref = useResizeHandle({
    onDrag,
    onDragEnd,
    resizeType: ResizeType.Both,
  });

  return (
    <div className="resize-handle resize-both-handle" ref={ref}>
      {children ? children : <ArrowNWSE />}
    </div>
  );
};

export default ResizeBothHandle;
