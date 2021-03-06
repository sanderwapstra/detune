import to from 'await-to-js';
import mergeImages from 'merge-images';
import React, { useRef } from 'react';
import ReactGA from 'react-ga';
import { useSelector } from 'react-redux';
import SpotifyWebApi from 'spotify-web-api-js';
import { RootState } from '../../store/reducers';
import Button from '../Button/Button';
import StyledGeneratePlaylist from './GeneratePlaylist.styles';

type Props = {
    onPlaylistReady: (uri: string) => void;
};

const GeneratePlaylist: React.FC<Props> = ({ onPlaylistReady }) => {
    const spotifyApi = useRef(new SpotifyWebApi());
    const { user } = useSelector((state: RootState) => state.app);
    const artists = useSelector((state: RootState) => state.artists);
    const trackAttributes = useSelector(
        (state: RootState) => state.trackAttributes
    );
    const { name } = useSelector((state: RootState) => state.playlist);

    const getPlayListTitle = () => {
        return name ? `${name} :: Detune.it` : 'Playlist by Detune.it';
    };

    const getPlaylistDescription = () => {
        const artistNames = artists.map(artist => artist.name);

        return `Generated by Detune.it with these artists: ${artistNames.join(
            ', '
        )}`;
    };

    const createPlaylist = async () => {
        if (!user) return;

        ReactGA.event({
            category: 'Playlist',
            action: name
                ? 'User has chosen a custom name'
                : 'User did not chose a custom name',
            label: name || undefined,
        });

        const [err, playlist] = await to(
            spotifyApi.current.createPlaylist(user.id, {
                name: getPlayListTitle(),
                description: getPlaylistDescription(),
            })
        );

        if (err) {
            console.error(`❌ Creating playlist failed: ${err}`);
        }

        return playlist;
    };

    const addTracksToPlaylist = async (
        playlist: SpotifyApi.CreatePlaylistResponse,
        recommendations: SpotifyApi.RecommendationsFromSeedsResponse
    ) => {
        const [err] = await to(
            spotifyApi.current.addTracksToPlaylist(
                playlist.id,
                recommendations.tracks.map(track => track.uri)
            )
        );

        if (err) {
            console.error(`❌ Adding track to playlist failed: ${err}`);
        } else {
            const [err, response] = await to(
                spotifyApi.current.getPlaylistCoverImage(playlist.id)
            );

            if (err) {
                console.error(
                    `❌ Getting default playlist cover failed: ${err}`
                );
            }

            if (response && response.length > 0) {
                mergeImages(
                    [
                        response[0].url,
                        `${process.env.PUBLIC_URL}/artwork/mask.png`,
                        `${process.env.PUBLIC_URL}/artwork/logo.png`,
                    ],
                    { format: 'image/jpeg', crossOrigin: 'anonymous' }
                ).then(b64 => {
                    spotifyApi.current.uploadCustomPlaylistCoverImage(
                        playlist.id,
                        b64
                    );
                });
            }

            onPlaylistReady(playlist.uri);

            // Scroll to top
            window.scrollTo(0, 0);
        }
    };

    const getRecommendations = async () => {
        if (!artists.length) return;

        ReactGA.event({
            category: 'Playlist',
            action: `User has generated a playlist`,
        });

        const activeTrackAttributes: { [key: string]: number } = {};

        Object.keys(trackAttributes).forEach(attribute => {
            if (trackAttributes[attribute].active) {
                ReactGA.event({
                    category: 'Track attributes',
                    action: `User has tuned ${attribute}`,
                });

                activeTrackAttributes[attribute] =
                    trackAttributes[attribute].value;
            }
        });

        const [err, recommendations] = await to(
            spotifyApi.current.getRecommendations({
                seed_artists: artists.map(artist => artist.id),
                limit: 50,
                ...activeTrackAttributes,
            })
        );

        if (err) {
            console.error(`❌ Getting recommendations failed: ${err}`);
        }

        if (recommendations) {
            const playlist = await createPlaylist();

            if (playlist) {
                addTracksToPlaylist(playlist, recommendations);
            }
        }
    };

    return (
        <StyledGeneratePlaylist>
            <Button disabled={!artists.length} click={getRecommendations}>
                Generate playlist
            </Button>
        </StyledGeneratePlaylist>
    );
};

export default GeneratePlaylist;
