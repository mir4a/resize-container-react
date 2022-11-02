import * as React from "react";
import useResizeHandle, { ResizeType } from "../../hooks/use-resize-handle";
import { ReactComponent as ArrowWE } from "../icons/ArrowWE.svg";
import "./ResizeWidthHandle.css";

export interface ResizeWidthHandleProps {
  children?: React.ReactNode;
  isRTL?: boolean;
  onDrag?: ({ deltaX }: { deltaX?: number }) => void;
  onDragEnd?: () => void;
  style?: React.CSSProperties;
}

const ResizeWidthHandle: React.FC<ResizeWidthHandleProps> = ({
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
    resizeType: ResizeType.Width,
  });
  const classNames = ["resize-handle", "resize-width-handle", isRTL && "rtl"]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classNames} ref={ref} style={style}>
      {children ?? <ArrowWE />}
    </div>
  );
};

export default ResizeWidthHandle;
