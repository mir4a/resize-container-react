import * as React from "react";

import "./ResizeContainer.css";

export interface ResizeContainerProps {
  children: React.ReactNode;
}

const ResizeContainer: React.FC<ResizeContainerProps> = ({ children }) => {
  return <div className="resize-container">{children} hey</div>;
};

export default ResizeContainer;
