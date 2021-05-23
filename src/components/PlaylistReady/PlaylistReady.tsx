import React from 'react';
import useScript from '../../utils/useScript';
import Button from '../Button/Button';
import StyledPlaylistReady from './PlaylistReady.styles';

type Props = {
    playlistUri: string;
};

const PlaylistReady: React.FC<Props> = ({ playlistUri }) => {
    const status = useScript(
        `//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US&adInstanceId=95f4ba12-6b77-49af-8a99-b25757714f35`
    );

    return (
        <StyledPlaylistReady>
            <div className="cta">
                <h2>Your playlist is ready!</h2>
                <Button href={playlistUri}>Open Spotify</Button>
            </div>

            {/* <ProductList
            title="Need some new gear to enjoy your playlist?"
            items={gear}
            moreUrl="https://amzn.to/3uggAOa"
        /> */}

            <div id="amzn-assoc-ad-95f4ba12-6b77-49af-8a99-b25757714f35"></div>
        </StyledPlaylistReady>
    );
};

export default PlaylistReady;
