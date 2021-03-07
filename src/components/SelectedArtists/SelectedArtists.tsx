import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as Close } from '../../static/svg/Close.svg';
import { removeArtist } from '../../store/artistsSlice';
import { RootState } from '../../store/reducers';
import StyledSelectedArtists from './SelectedArtists.styles';

const SelectedArtists: React.FC = () => {
    const dispatch = useDispatch();
    const artists = useSelector((state: RootState) => state.artists);

    const handleRemoveArtist = (id: string) => {
        dispatch(removeArtist(id));
    };

    const renderArtist = (artist: SpotifyApi.ArtistObjectFull) => (
        <li key={artist.id}>
            <img
                src={artist.images[0].url}
                alt={`${artist.name}`}
                width="180"
                height="180"
            />
            <div className="info">
                <div className="name">{artist.name}</div>
                <button
                    className="remove"
                    onClick={() => handleRemoveArtist(artist.id)}
                >
                    <Close />
                </button>
            </div>
        </li>
    );

    const renderPlaceholders = () => {
        const nrOfPlaceholders = 5 - artists.length;

        let placeholders = [];

        for (let i = 0; i < nrOfPlaceholders; i++) {
            //Create the parent and add the children
            placeholders.push(
                <li key={`artist-placeholder-${i}`} className="placeholder" />
            );
        }
        return placeholders;
    };

    return (
        <StyledSelectedArtists>
            <ol>
                {artists.map(artist => renderArtist(artist))}
                {renderPlaceholders()}
            </ol>
        </StyledSelectedArtists>
    );
};

export default SelectedArtists;
