import React from 'react';
import ReactGA from 'react-ga';
import Button from './Button/Button';

const Login: React.FC = () => {
    const loginWithSpotify = () => {
        ReactGA.event({
            category: 'Login',
            action: 'User pressed Login with Spotify button',
        });

        const scopes = 'playlist-modify-public';
        const redirectUrl =
            process.env.NODE_ENV === 'development'
                ? 'https://localhost:3000/'
                : 'https://discovermusic.netlify.app/';

        window.location.replace(
            `https://accounts.spotify.com/authorize?client_id=453ef47ef0c24a63a38a91b855d9c9b3&redirect_uri=${encodeURIComponent(
                redirectUrl
            )}&scope=${encodeURIComponent(scopes)}&response_type=token`
        );
    };

    return <Button click={loginWithSpotify}>Login with Spotify</Button>;
};

export default Login;
