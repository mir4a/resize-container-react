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
      ref.current.onpointerdown = (e) => {
        e.stopPropagation();
        e.preventDefault();
        const currentPositionX = e.pageX;
        const currentPositionY = e.pageY;

        function onPointerMove(pointerMoveEvent: PointerEvent): void {
          let deltaX: number;

          if (isRTL) {
            // took some time to figure out direction here XD
            if (pointerMoveEvent.pageX > currentPositionX) {
              deltaX = -(pointerMoveEvent.pageX - currentPositionX);
            } else if (pointerMoveEvent.pageX === currentPositionX) {
              deltaX = 0;
            } else {
              deltaX = currentPositionX - pointerMoveEvent.pageX;
            }
          } else {
            deltaX = pointerMoveEvent.pageX - currentPositionX;
          }
          const deltaY = pointerMoveEvent.pageY - currentPositionY;

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

        document.addEventListener("pointermove", onPointerMove);

        document.onpointerleave = (pointerLeaveEvent: PointerEvent) => {
          if (
            pointerLeaveEvent.clientY <= 0 ||
            pointerLeaveEvent.clientX <= 0 ||
            pointerLeaveEvent.clientX >= window.innerWidth ||
            pointerLeaveEvent.clientY >= window.innerHeight
          ) {
            document.removeEventListener("pointermove", onPointerMove);
            document.onpointerleave = null;
            onDragEnd?.();
          }
        };

        document.onpointerup = () => {
          document.removeEventListener("pointermove", onPointerMove);
          document.onpointerup = null;
          onDragEnd?.();
        };
      };
    }
  }, [onDrag, onDragEnd]);

  return ref;
};

export default useResizeHandle;
