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
  isRTL?: boolean;
  onResize?: () => void;
  onResizeEnd?: () => void;
}

export interface DragParams {
  deltaX?: number;
  deltaY?: number;
}

const ResizeContainer: React.FC<ResizeContainerProps> = ({
  children,
  style,
  isRTL = false,
  initialWidth,
  initialHeight,
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [height, setHeight] = React.useState<number | undefined>(() =>
    ref.current != null ? ref.current.offsetHeight : initialHeight ?? undefined
  );
  const [width, setWidth] = React.useState<number | undefined>(() =>
    ref.current != null ? ref.current.offsetWidth : initialWidth ?? undefined
  );
  const [prevHeight, setPrevHeight] = React.useState<number | undefined>(() =>
    ref.current != null ? ref.current.offsetHeight : initialHeight ?? undefined
  );
  const [prevWidth, setPrevWidth] = React.useState<number | undefined>(() =>
    ref.current != null ? ref.current.offsetWidth : initialWidth ?? undefined
  );

  React.useLayoutEffect(() => {
    if (ref.current != null) {
      setPrevHeight(ref.current.offsetHeight);
      setPrevWidth(ref.current.offsetWidth);
    }
  }, []);

  const onDrag = ({ deltaX, deltaY }: DragParams): void => {
    if (ref.current != null) {
      deltaX != null && prevWidth != null && setWidth(prevWidth + deltaX);
      deltaY != null && prevHeight != null && setHeight(prevHeight + deltaY);
    }
  };

  const onDragEnd = (): void => {
    console.log("onDragEnd");
    if (ref.current != null) {
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
      data-testid="resize-container"
      ref={ref}
      style={{ ...style, height, width }}
    >
      {React.Children.map(children, (child) => {
        // @ts-expect-error: TODO: fix this
        if (allowedChildrenType.includes(child?.type)) {
          return React.cloneElement(child as any, {
            onDrag,
            onDragEnd,
            isRTL,
          });
        }
        return child;
      })}
    </div>
  );
};

export default ResizeContainer;
