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
  return (
    <div className="resize-container">
      {children}
      <ResizeHeightHandle onDrag={() => {}} onDragEnd={() => {}} />
    </div>
  );
};

export default ResizeContainer;
