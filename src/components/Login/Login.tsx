import React from 'react';
import ReactGA from 'react-ga';
import { v4 as uuidv4 } from 'uuid';
import Button from '../Button/Button';
import StyledLogin from './Login.styles';
import Tagline from '../Tagline/Tagline';

const Login: React.FC = () => {
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
                : 'https://detune.netlify.app/';

        window.location.replace(
            `https://accounts.spotify.com/authorize?client_id=453ef47ef0c24a63a38a91b855d9c9b3&redirect_uri=${encodeURIComponent(
                redirectUrl
            )}&scope=${encodeURIComponent(
                scopes
            )}&state=${state}&response_type=token`
        );
    };

    return (
        <StyledLogin>
            <Tagline />
            <Button click={loginWithSpotify}>Login with Spotify</Button>
        </StyledLogin>
    );
};

export default Login;
