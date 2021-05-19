import to from 'await-to-js';
import queryString from 'query-string';
import React, { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SpotifyWebApi from 'spotify-web-api-js';
import { Col, Container, Row } from 'styled-bootstrap-grid';
import StyledApp from './App.styles';
import AddArtistForm from './components/AddArtistForm/AddArtistForm';
import Footer from './components/Footer/Footer';
import GeneratePlaylist from './components/GeneratePlaylist/GeneratePlaylist';
import Login from './components/Login/Login';
import Logo from './components/Logo/Logo';
import PlaylistName from './components/PlaylistName/PlaylistName';
import Profile from './components/Profile/Profile';
import SelectedArtists from './components/SelectedArtists/SelectedArtists';
import TuneTrackAttributes from './components/TuneTrackAttributes/TuneTrackAttributes';
import { resetUser, setToken, setUser } from './store/appSlice';
import { RootState } from './store/reducers';

function App() {
    const dispatch = useDispatch();
    const spotifyApi = useRef(new SpotifyWebApi());
    const { token, user } = useSelector((state: RootState) => state.app);

    const clearUser = useCallback(() => {
        dispatch(resetUser());
        localStorage.removeItem('stateKey');
    }, [dispatch]);

    // Save token after first login
    useEffect(() => {
        if (!token && window.location.hash) {
            const { access_token, state } = queryString.parse(
                window.location.hash
            );
            const storedState = localStorage.getItem('stateKey');

            if (access_token && (state == null || state !== storedState)) {
                clearUser();

                console.error('❌ Authentication failed');
            } else {
                if (access_token) {
                    dispatch(setToken(access_token));
                }
            }
        }
    }, [dispatch, token, clearUser]);

    // Set access token after getting token
    // Save user info to Redux
    useEffect(() => {
        const setAccessToken = () => {
            spotifyApi.current.setAccessToken(token);

            const noHashURL = window.location.href.replace(/#.*$/, '');
            window.history.replaceState('', document.title, noHashURL);
        };

        const getUser = async () => {
            const [err, user] = await to(spotifyApi.current.getMe());

            if (err) {
                clearUser();
            }

            if (user) {
                dispatch(setUser(user));
            }
        };

        if (token) {
            setAccessToken();
            getUser();
        }
    }, [dispatch, token, clearUser]);

    return (
        <StyledApp>
            <Logo />

            <Container>
                {token && user ? (
                    <Row>
                        <Col>
                            <Profile />
                            <PlaylistName />
                            <AddArtistForm />
                            <SelectedArtists />
                            <TuneTrackAttributes />
                            <GeneratePlaylist />
                        </Col>
                    </Row>
                ) : (
                    <Row>
                        <Col md={10} mdOffset={1}>
                            <Login />
                        </Col>
                    </Row>
                )}
            </Container>

            <Footer />
        </StyledApp>
    );
}

export default App;
