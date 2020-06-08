import React, { useState, useRef } from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { animated, useSpring } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import { isTouch } from '../../helpers/isTouch';
import mapNumberToRange from '../../helpers/mapNumberToRange';
import StyledRotaryKnob from './RotaryKnob.styles';

type Props = {
    active: boolean;
    title: string;
    min: number;
    max: number;
    onValueChange: (value: number) => void;
    onActiveChange: (active: boolean) => void;
};

const RotaryKnob: React.FC<Props> = ({
    active,
    title,
    min,
    max,
    onValueChange,
    onActiveChange,
}) => {
    const knobRef = useRef<HTMLButtonElement>(null);
    const [percentage, setPercentage] = useState(0);
    const [{ rotate }, set] = useSpring(() => ({
        rotate: 220,
    }));

    // Set the drag hook and define component movement based on gesture data
    const bind = useDrag(
        ({ event, last }) => {
            if (event && knobRef.current) {
                const viewportOffset = knobRef.current.getBoundingClientRect();
                const { top, left, width, height } = viewportOffset;
                const boxCenter = [left + width / 2, top + height / 2];
                let x: number = 0;
                let y: number = 0;

                if (isTouch(event)) {
                    const touch = event.touches[0] || event.changedTouches[0];
                    x = touch.clientX;
                    y = touch.clientY;
                } else {
                    x = event.clientX;
                    y = event.clientY;
                }

                const angle =
                    Math.atan2(y - boxCenter[1], x - boxCenter[0]) *
                    (180 / Math.PI);
                const degrees = angle + 90;
                let percentage: number = 0;

                if (degrees >= 220 && degrees <= 270) {
                    percentage = Math.round(
                        mapNumberToRange(degrees, 220, 270, 0, 17.857142855)
                    );
                } else if (degrees >= -90 && degrees <= 140) {
                    percentage = Math.round(
                        mapNumberToRange(degrees, -90, 140, 17.857142855, 100)
                    );
                } else if (degrees >= 180) {
                    // bite out of chart
                    percentage = 0;
                } else {
                    // bite out of chart
                    percentage = 100;
                }

                set({ rotate: degrees, immediate: true });

                setPercentage(percentage);
                if (last) {
                    onValueChange(
                        mapNumberToRange(percentage, 0, 100, min, max)
                    );
                }
            }
        },
        {
            enabled: active,
        }
    );

    return (
        <StyledRotaryKnob>
            <div
                style={{
                    position: 'relative',
                    width: '224px',
                    height: '224px',
                }}
            >
                <CircularProgressbar
                    value={active ? percentage : 0}
                    circleRatio={0.75}
                    styles={buildStyles({
                        rotation: 1 / 2 + 1 / 8,
                        strokeLinecap: 'butt',
                        // trailColor: '#404547',
                        // pathColor: '#87FA5F',
                        pathTransition: 'none',
                    })}
                />

                <animated.button
                    type="button"
                    ref={knobRef}
                    {...bind()}
                    style={{
                        position: 'absolute',
                        top: 32,
                        left: 32,
                        backgroundColor: '#fff',
                        width: '160px',
                        height: '160px',
                        borderRadius: '50%',
                        border: '0',
                        transform: rotate.to(deg => `rotate(${deg}deg)`),
                        transformOrigin: 'center',
                        cursor: 'pointer',
                        outline: 'none',
                        touchAction: 'none',
                    }}
                >
                    <div
                        style={{
                            position: 'absolute',
                            top: '10px',
                            left: '50%',
                            transform: `translate(-50%, 0)`,
                            width: '4px',
                            height: 'calc(50% - 10px)',
                            borderRadius: '4px',
                            backgroundColor: 'rgba(0,0,0,0.4)',
                        }}
                    ></div>
                </animated.button>
            </div>

            <label>
                <input
                    type="checkbox"
                    onChange={e => {
                        if (!e.target.checked) {
                            set({ rotate: 220, immediate: true });
                        }

                        onActiveChange(e.target.checked);
                    }}
                />
                {title}
            </label>
        </StyledRotaryKnob>
    );
};

export default RotaryKnob;
