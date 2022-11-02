import * as React from "react";

export enum ResizeType {
  Height,
  Width,
  Both,
}

export interface UseResizeHandleProps {
  onDrag?: ({ deltaX, deltaY }: { deltaX?: number; deltaY?: number }) => void;
  onDragEnd?: () => void;
  resizeType: ResizeType;
  isRTL?: boolean;
}

const useResizeHandle = ({
  onDrag,
  onDragEnd,
  resizeType,
  isRTL = false,
}: UseResizeHandleProps): React.RefObject<HTMLDivElement> => {
  const ref = React.useRef<HTMLDivElement>(null);
  React.useLayoutEffect(() => {
    if (ref.current != null) {
      ref.current.onmousedown = (e) => {
        e.preventDefault();
        const currentPositionX = e.pageX;
        const currentPositionY = e.pageY;

        function onMouseMove(mouseMoveEvent: MouseEvent): void {
          let deltaX: number;

          if (isRTL) {
            // took some time to figure out direction here XD
            if (mouseMoveEvent.pageX > currentPositionX) {
              deltaX = -(mouseMoveEvent.pageX - currentPositionX);
            } else if (mouseMoveEvent.pageX === currentPositionX) {
              deltaX = 0;
            } else {
              deltaX = currentPositionX - mouseMoveEvent.pageX;
            }
          } else {
            deltaX = mouseMoveEvent.pageX - currentPositionX;
          }
          const deltaY = mouseMoveEvent.pageY - currentPositionY;

          if (onDrag != null) {
            if (resizeType === ResizeType.Height) {
              onDrag({ deltaY });
            }

            if (resizeType === ResizeType.Width) {
              onDrag({ deltaX });
            }

            if (resizeType === ResizeType.Both) {
              onDrag({ deltaX, deltaY });
            }
          }
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
            onDragEnd?.();
          }
        };

        document.onmouseup = () => {
          document.removeEventListener("mousemove", onMouseMove);
          document.onmouseup = null;
          onDragEnd?.();
        };
      };
    }
  }, [onDrag, onDragEnd]);

  return ref;
};

export default useResizeHandle;
