import React, { useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ReactGA from 'react-ga';
import { animated, useSpring } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import useMeasure from 'react-use-measure';
import { v4 as uuidv4 } from 'uuid';
import Button from '../Button/Button';
import StyledLogin from './Login.styles';
import mapNumberToRange from '../../helpers/mapNumberToRange';

const GradientSVG = ({ rotation = 0 }) => {
    return (
        <svg style={{ height: 0, position: 'absolute' }}>
            <defs>
                <linearGradient
                    id="testGradient"
                    gradientTransform={`rotate(${rotation})`}
                >
                    <stop offset="0%" stopColor="#ff3e13" />
                    <stop offset="31.25%" stopColor="#fcbb13" />
                    <stop offset="62.5%" stopColor="#87fa5f" />
                </linearGradient>
            </defs>
        </svg>
    );
};

const Login: React.FC = () => {
    const [ref, bounds] = useMeasure();
    const [percentage, setPercentage] = useState(0);
    const [{ rotate }, set] = useSpring(() => ({
        rotate: 0,
    }));

    // Set the drag hook and define component movement based on gesture data
    const bind = useDrag(({ event }) => {
        const { height, width, left, top } = bounds;
        const boxCenter = [left + width / 2, top + height / 2];
        const angle =
            Math.atan2(
                event.clientY - boxCenter[1],
                event.clientX - boxCenter[0]
            ) *
            (180 / Math.PI);

        const atan =
            Math.atan2(event.clientY - height / 2, event.clientX - width / 2) +
            Math.PI / 2;
        const degrees = angle + 90;

        if (degrees >= 220 && degrees <= 270) {
            setPercentage(mapNumberToRange(degrees, 220, 270, 0, 17.857142855));
        } else if (degrees >= -90 && degrees <= 140) {
            setPercentage(
                mapNumberToRange(degrees, -90, 140, 17.857142855, 100)
            );
        } else {
            // bite out of chart
            console.log(`inactive chart ${degrees}`);
        }

        set({ rotate: degrees, immediate: true });
    });

    const loginWithSpotify = () => {
        ReactGA.event({
            category: 'Login',
            action: 'User pressed Login with Spotify button',
        });

        const state = uuidv4();
        localStorage.setItem('stateKey', state);

        const scopes = 'playlist-modify-public';
        const redirectUrl =
            process.env.NODE_ENV === 'development'
                ? 'https://localhost:3000/'
                : 'https://discovermusic.netlify.app/';

        window.location.replace(
            `https://accounts.spotify.com/authorize?client_id=453ef47ef0c24a63a38a91b855d9c9b3&redirect_uri=${encodeURIComponent(
                redirectUrl
            )}&scope=${encodeURIComponent(
                scopes
            )}&state=${state}&response_type=token`
        );
    };

    return (
        <>
            <StyledLogin>
                <GradientSVG />
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,

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
                </div>
                <animated.button
                    type="button"
                    ref={ref}
                    {...bind()}
                    style={{
                        position: 'fixed',
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

                <Button click={loginWithSpotify}>Login with Spotify</Button>
            </StyledLogin>
        </>
    );
};

export default Login;
