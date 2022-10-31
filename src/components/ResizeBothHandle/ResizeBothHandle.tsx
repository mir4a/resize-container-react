import * as React from "react";
import { ReactComponent as ArrowNWSE } from "../icons/ArrowNWSE.svg";
import "./ResizeBothHandle.css";

export interface ResizeBothHandleProps {
  onDrag: ({ deltaX, deltaY }: { deltaX: number; deltaY: number }) => void;
  onDragEnd: () => void;
  children?: React.ReactNode;
}

const ResizeBothHandle: React.FC<ResizeBothHandleProps> = ({
  children,
  onDrag,
  onDragEnd,
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  React.useLayoutEffect(() => {
    if (ref.current) {
      ref.current.onmousedown = (e) => {
        e.preventDefault();
        const currentPositionX = e.pageX;
        const currentPositionY = e.pageY;

        function onMouseMove(mouseMoveEvent: MouseEvent) {
          const deltaX = mouseMoveEvent.pageX - currentPositionX;
          const deltaY = mouseMoveEvent.pageY - currentPositionY;
          onDrag({ deltaX, deltaY });
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
    <div className="resize-handle resize-both-handle" ref={ref}>
      {children ? children : <ArrowNWSE />}
    </div>
  );
};

export default ResizeBothHandle;
