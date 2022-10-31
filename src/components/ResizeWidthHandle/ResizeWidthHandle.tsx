import * as React from "react";
import { ReactComponent as ArrowWE } from "../icons/ArrowWE.svg";
import "./ResizeWidthHandle.css";

export interface ResizeWidthHandleProps {
  onDrag: ({ deltaX }: { deltaX: number }) => void;
  onDragEnd: () => void;
  children?: React.ReactNode;
}

const ResizeWidthHandle: React.FC<ResizeWidthHandleProps> = ({
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

        function onMouseMove(mouseMoveEvent: MouseEvent) {
          const deltaX = mouseMoveEvent.pageX - currentPositionX;
          onDrag({ deltaX });
        }

        document.addEventListener("mousemove", onMouseMove);

        document.onmouseleave = (mouseLeaveEvent: MouseEvent) => {
          if (
            mouseLeaveEvent.clientY <= 0 ||
            mouseLeaveEvent.clientX <= 0 ||
            mouseLeaveEvent.clientX >= window.innerWidth ||
            mouseLeaveEvent.clientY >= window.innerHeight
          ) {
            document.removeEventListener("mousemove", onMouseMove);
            document.onmouseleave = null;
            onDragEnd();
          }
        };

        document.onmouseup = () => {
          document.removeEventListener("mousemove", onMouseMove);
          document.onmouseup = null;
          onDragEnd();
        };
      };
    }
  }, [onDrag, onDragEnd]);

  return (
    <div className="resize-handle resize-width-handle" ref={ref}>
      {children ? children : <ArrowWE />}
    </div>
  );
};

export default ResizeWidthHandle;
