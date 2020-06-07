export const isTouch = (
    e:
        | React.TouchEvent
        | React.MouseEvent
        | React.WheelEvent
        | React.PointerEvent
): e is React.TouchEvent => {
    return e.nativeEvent instanceof TouchEvent;
};
