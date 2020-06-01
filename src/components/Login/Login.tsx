import React from 'react';
import ReactGA from 'react-ga';
import { animated, useSpring } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import useMeasure from 'react-use-measure';
import { v4 as uuidv4 } from 'uuid';
import Button from '../Button/Button';
import StyledLogin from './Login.styles';

const Login: React.FC = () => {
    const [ref, bounds] = useMeasure();
    const [{ rotate }, set] = useSpring(() => ({
        rotate: 0,
    }));

    // Set the drag hook and define component movement based on gesture data
    const bind = useDrag(({ event }) => {
        const { height, width } = bounds;
        const atan =
            Math.atan2(event.pageY - height / 2, event.pageX - width / 2) +
            Math.PI / 2;
        const degrees = (atan * 180) / Math.PI;

        if (degrees > 140 && degrees < 220) {
            return;
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
            <animated.button
                type="button"
                ref={ref}
                {...bind()}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    backgroundColor: '#fff',
                    width: '200px',
                    height: '200px',
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
                        height: '90px',
                        borderRadius: '4px',
                        backgroundColor: 'rgba(0,0,0,0.4)',
                    }}
                ></div>
            </animated.button>
            <StyledLogin>
                <Button click={loginWithSpotify}>Login with Spotify</Button>
            </StyledLogin>
        </>
    );
};

export default Login;
