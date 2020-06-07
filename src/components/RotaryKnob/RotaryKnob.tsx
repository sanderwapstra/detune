import React, { useState } from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { animated, useSpring } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import useMeasure from 'react-use-measure';
import { isTouch } from '../../helpers/isTouch';
import mapNumberToRange from '../../helpers/mapNumberToRange';
import StyledRotaryKnob from './RotaryKnob.styles';

type Props = {};

const RotaryKnob: React.FC<Props> = () => {
    const [ref, bounds] = useMeasure();
    const [percentage, setPercentage] = useState(0);
    const [{ rotate }, set] = useSpring(() => ({
        rotate: 0,
    }));

    // Set the drag hook and define component movement based on gesture data
    const bind = useDrag(({ event }) => {
        if (event) {
            const { height, width, left, top } = bounds;
            const boxCenter = [left + width / 2, top + height / 2];
            let x: number = 0;
            let y: number = 0;

            if (isTouch(event)) {
                const touch = event.touches[0] || event.changedTouches[0];
                x = touch.pageX;
                y = touch.pageY;
            } else {
                x = event.pageX;
                y = event.pageY;
            }

            const angle =
                Math.atan2(x - boxCenter[1], y - boxCenter[0]) *
                (180 / Math.PI);
            const degrees = angle + 90;

            if (degrees >= 220 && degrees <= 270) {
                setPercentage(
                    mapNumberToRange(degrees, 220, 270, 0, 17.857142855)
                );
            } else if (degrees >= -90 && degrees <= 140) {
                setPercentage(
                    mapNumberToRange(degrees, -90, 140, 17.857142855, 100)
                );
            } else {
                // bite out of chart
                console.log(`inactive chart ${degrees}`);
            }

            set({ rotate: degrees, immediate: true });
        }
    });

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
                    value={percentage}
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
                    ref={ref}
                    {...bind()}
                    style={{
                        position: 'absolute',
                        top: 32,
                        left: 32,
                        backgroundColor: '#fff',
                        width: '160px',
                        height: '160px',
                        borderRadius: '50%',
                        transform: rotate.to(deg => `rotate(${deg}deg)`),
                        transformOrigin: 'center',
                        cursor: 'pointer',
                        outline: 'none',
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
        </StyledRotaryKnob>
    );
};

export default RotaryKnob;
