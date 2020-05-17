import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setToken } from './store/appSlice';
import { RootState } from './store/reducers';

function App() {
    const dispatch = useDispatch();
    const { token } = useSelector((state: RootState) => state.app);

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

    useEffect(() => {
        if (!token && window.location.hash) {
            dispatch(setToken(window.location.hash));
        }
    }, [dispatch, token]);

    return (
        <div className="App">
            {token ? (
                <p>Logged in</p>
            ) : (
                <button onClick={loginWithSpotify}>Login with Spotify</button>
            )}
        </div>
    );
}

export default App;
