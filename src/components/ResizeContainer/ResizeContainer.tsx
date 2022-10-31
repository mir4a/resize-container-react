import * as React from "react";

export interface ResizeContainerProps {
  children: React.ReactNode;
}

const ResizeContainer: React.FC<ResizeContainerProps> = ({ children }) => {
  return <div className="resize-container">{children}</div>;
};

export default ResizeContainer;
