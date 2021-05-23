import React from 'react';
import { gear } from '../../data/gear';
import Button from '../Button/Button';
import ProductList from '../ProductList/ProductList';
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

        <ProductList
            title="Need some new gear to enjoy your playlist?"
            items={gear}
            moreUrl="https://amzn.to/3uggAOa"
        />
    </StyledPlaylistReady>
);

export default PlaylistReady;
