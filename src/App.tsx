import to from 'await-to-js';
import queryString from 'query-string';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SpotifyWebApi from 'spotify-web-api-js';
import AddArtistForm from './components/AddArtistForm';
import GeneratePlaylist from './components/GeneratePlaylist';
import Login from './components/Login';
import SelectedArtists from './components/SelectedArtists';
import TuneTrackAttributes from './components/TuneTrackAttributes';
import { setToken, setUser } from './store/appSlice';
import { RootState } from './store/reducers';

function App() {
    const dispatch = useDispatch();
    const spotifyApi = useRef(new SpotifyWebApi());
    const artists = useSelector((state: RootState) => state.artists);
    const { token, user } = useSelector((state: RootState) => state.app);

    // Save token after first login
    useEffect(() => {
        if (!token && window.location.hash) {
            const { access_token, state } = queryString.parse(
                window.location.hash
            );
            const storedState = localStorage.getItem('stateKey');

            if (access_token && (state == null || state !== storedState)) {
                console.log(
                    'There was an error during the authentication or you need to log in again'
                );
            } else {
                localStorage.removeItem('stateKey');

                if (access_token) {
                    dispatch(setToken(access_token));
                    spotifyApi.current.setAccessToken(access_token as string);
                }
            }
        }
    }, [dispatch, token]);

    // Set access token after getting token
    // Save user info to Redux
    useEffect(() => {
        const setAccessToken = () => {
            spotifyApi.current.setAccessToken(token);
        };

        const getUser = async () => {
            const [err, user] = await to(spotifyApi.current.getMe());

            if (err) {
                // Clear local data
                window.localStorage.removeItem('persist:root');

                console.error(`Something went wrong: ${err}`);
            }

            if (user) {
                dispatch(setUser(user));
            }
        };

        if (token) {
            setAccessToken();
            getUser();
        }
    }, [dispatch, token]);

    return (
        <div className="App">
            {token && user ? (
                <>
                    <h1>Hi, {user.display_name}!</h1>

                    <h2>
                        Add up to 5 artists to create a personalised playlist.
                    </h2>

                    {artists.length < 5 && <AddArtistForm />}

                    {artists.length > 0 && <SelectedArtists />}

                    <TuneTrackAttributes />

                    {artists.length > 0 && <GeneratePlaylist />}
                </>
            ) : (
                <Login />
            )}
        </div>
    );
}

export default App;
