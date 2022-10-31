import * as React from "react";
import ResizeHeightHandle from "../ResizeHeightHandle";
import ResizeWidthHandle from "../ResizeWidthHandle";

import "./ResizeContainer.css";

export interface ResizeContainerProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  onResize?: () => void;
  onResizeStart?: () => void;
  onResizeEnd?: () => void;
}

export type DragParams = {
  deltaX?: number;
  deltaY?: number;
};

const ResizeContainer: React.FC<ResizeContainerProps> = ({ children }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [height, setHeight] = React.useState<number | undefined>(() =>
    ref.current ? ref.current.offsetHeight : undefined
  );
  const [width, setWidth] = React.useState<number | undefined>(() =>
    ref.current ? ref.current.offsetWidth : undefined
  );
  const [prevHeight, setPrevHeight] = React.useState<number | undefined>(() =>
    ref.current ? ref.current.offsetHeight : undefined
  );
  const [prevWidth, setPrevWidth] = React.useState<number | undefined>(() =>
    ref.current ? ref.current.offsetWidth : undefined
  );

  React.useLayoutEffect(() => {
    if (ref.current) {
      setPrevHeight(ref.current.offsetHeight);
      setPrevWidth(ref.current.offsetWidth);
    }
  }, []);

  const onDrag = ({ deltaX, deltaY }: DragParams) => {
    if (ref.current) {
      deltaX && prevWidth && setWidth(prevWidth + deltaX);
      deltaY && prevHeight && setHeight(prevHeight + deltaY);
    }
  };

  const onResizeHeight = ({ deltaY }: DragParams) => {
    onDrag({ deltaY });
  };

  const onResizeWidth = ({ deltaX }: DragParams) => {
    onDrag({ deltaX });
  };

  const onResizeBoth = ({ deltaX, deltaY }: DragParams) => {
    onDrag({ deltaX, deltaY });
  };

  const onDragEnd = () => {
    if (ref.current) {
      setPrevHeight(ref.current.offsetHeight);
      setPrevWidth(ref.current.offsetWidth);
    }
  };

  return (
    <div className="resize-container" ref={ref} style={{ height, width }}>
      {children}
      <ResizeHeightHandle onDrag={onResizeHeight} onDragEnd={onDragEnd} />
      <ResizeWidthHandle onDrag={onResizeWidth} onDragEnd={onDragEnd} />
    </div>
  );
};

export default ResizeContainer;
