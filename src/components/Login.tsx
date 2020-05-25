import React from 'react';
import Button from './Button/Button';

const Login: React.FC = () => {
    const loginWithSpotify = () => {
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
