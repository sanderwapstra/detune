import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeArtist } from '../store/artistsSlice';
import { RootState } from '../store/reducers';

const SelectedArtists: React.FC = () => {
    const dispatch = useDispatch();
    const artists = useSelector((state: RootState) => state.artists);

    return (
        <>
            <h3>Selected artists</h3>
            <ol>
                {artists.map((artist, index) => (
                    <li key={artist.id}>
                        <span>{artist.name}</span>
                        <img
                            src={artist.images[0].url}
                            alt={`${artist.name}`}
                            width="180"
                            height="180"
                        />
                        <button
                            onClick={() => dispatch(removeArtist(artist.id))}
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ol>
        </>
    );
};

export default SelectedArtists;
