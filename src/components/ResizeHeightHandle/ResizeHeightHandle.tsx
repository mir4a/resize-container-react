import * as React from "react";
import { ReactComponent as ArrowNS } from "../icons/ArrowNS.svg";
import "./ResizeHeightHandle.css";

export interface ResizeHeightHandleProps {
  onDrag: ({ deltaY }: { deltaY: number }) => void;
  onDragEnd: () => void;
  children?: React.ReactNode;
}

const ResizeHeightHandle: React.FC<ResizeHeightHandleProps> = ({
  children,
  onDrag,
  onDragEnd,
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  React.useLayoutEffect(() => {
    if (ref.current) {
      ref.current.onmousedown = (e) => {
        e.preventDefault();
        const currentPositionY = e.pageY;

        function onMouseMove(mouseMoveEvent: MouseEvent) {
          const deltaY = mouseMoveEvent.pageY - currentPositionY;
          onDrag({ deltaY });
        }

        document.addEventListener("mousemove", onMouseMove);

        document.onmouseup = () => {
          document.removeEventListener("mousemove", onMouseMove);
          document.onmouseup = null;
          onDragEnd();
        };
      };
    }
  }, [onDrag, onDragEnd]);

  return (
    <div className="resize-handle resize-height-handle" ref={ref}>
      {children ? children : <ArrowNS />}
    </div>
  );
};

export default ResizeHeightHandle;
