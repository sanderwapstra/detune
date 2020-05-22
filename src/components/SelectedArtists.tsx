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
            {artists.map((artist, index) => (
                <div key={artist.id}>
                    {index + 1}. {artist.name}
                    <button onClick={() => dispatch(removeArtist(artist.id))}>
                        Remove
                    </button>
                </div>
            ))}
        </>
    );
};

export default SelectedArtists;
