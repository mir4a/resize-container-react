import * as React from "react";
import ResizeHeightHandle from "../ResizeHeightHandle";

import "./ResizeContainer.css";

export interface ResizeContainerProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  onResize?: () => void;
  onResizeStart?: () => void;
  onResizeEnd?: () => void;
}

const ResizeContainer: React.FC<ResizeContainerProps> = ({ children }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [height, setHeight] = React.useState<number | undefined>(() =>
    ref.current ? ref.current.offsetHeight : undefined
  );

  const onDrag = ({ deltaY }: { deltaY: number }) => {
    if (ref.current) {
      console.log("onDrag", deltaY);
      deltaY && setHeight(ref.current.offsetHeight + deltaY);
    }
  };

  return (
    <div className="resize-container" ref={ref} style={{ height }}>
      {children}
      <ResizeHeightHandle onDrag={onDrag} onDragEnd={() => {}} />
    </div>
  );
};

export default ResizeContainer;
