import * as React from "react";
import ResizeBothHandle from "../ResizeBothHandle";
import ResizeHeightHandle from "../ResizeHeightHandle";
import ResizeWidthHandle from "../ResizeWidthHandle";

import "./ResizeContainer.css";

export interface ResizeContainerProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  initialWidth?: number;
  initialHeight?: number;
  onResize?: () => void;
  onResizeStart?: () => void;
  onResizeEnd?: () => void;
}

export type DragParams = {
  deltaX?: number;
  deltaY?: number;
};

const ResizeContainer: React.FC<ResizeContainerProps> = ({
  children,
  style,
  initialWidth,
  initialHeight,
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [height, setHeight] = React.useState<number | undefined>(() =>
    ref.current ? ref.current.offsetHeight : initialHeight ?? undefined
  );
  const [width, setWidth] = React.useState<number | undefined>(() =>
    ref.current ? ref.current.offsetWidth : initialWidth ?? undefined
  );
  const [prevHeight, setPrevHeight] = React.useState<number | undefined>(() =>
    ref.current ? ref.current.offsetHeight : initialHeight ?? undefined
  );
  const [prevWidth, setPrevWidth] = React.useState<number | undefined>(() =>
    ref.current ? ref.current.offsetWidth : initialWidth ?? undefined
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

  const onDragEnd = () => {
    if (ref.current) {
      setPrevHeight(ref.current.offsetHeight);
      setPrevWidth(ref.current.offsetWidth);
    }
  };

  const allowedChildrenType = [
    ResizeBothHandle,
    ResizeHeightHandle,
    ResizeWidthHandle,
  ];

  return (
    <div
      className="resize-container"
      ref={ref}
      style={{ ...style, height, width }}
    >
      {React.Children.map(children, (child) => {
        console.log(child);
        if (
          child &&
          child.hasOwnProperty("type") &&
          allowedChildrenType.includes(child.type)
        ) {
          return React.cloneElement(child, {
            onDrag,
            onDragEnd,
          });
        }
        return child;
      })}
    </div>
  );
};

export default ResizeContainer;
