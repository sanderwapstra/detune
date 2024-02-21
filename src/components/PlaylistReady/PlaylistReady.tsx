import React from 'react';
import Button from '../Button/Button';
import StyledPlaylistReady from './PlaylistReady.styles';

type Props = {
    playlistUri: string;
};

const PlaylistReady: React.FC<Props> = ({ playlistUri }) => (
    <StyledPlaylistReady>
        <div className="cta">
            <h2>Your playlist is ready!</h2>
            <Button href={playlistUri}>Open Spotify</Button>
        </div>
    </StyledPlaylistReady>
);

export default PlaylistReady;
