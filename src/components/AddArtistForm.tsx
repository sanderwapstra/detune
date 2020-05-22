import to from 'await-to-js';
import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import SpotifyWebApi from 'spotify-web-api-js';
import { addArtist } from '../store/artistsSlice';

const AddArtistForm: React.FC = () => {
    const dispatch = useDispatch();
    const spotifyApi = useRef(new SpotifyWebApi());
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = async (data: any) => {
        const [err, results] = await to(
            spotifyApi.current.search(data.artist, ['artist'])
        );

        if (err) {
            console.error(`Something went wrong: ${err}`);
        }

        if (results?.artists?.items) {
            dispatch(addArtist(results.artists.items[0]));
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{ marginBottom: 20 }}>
            <input
                type="text"
                placeholder="Artist"
                name="artist"
                ref={register({
                    required: true,
                    maxLength: 80,
                })}
            />
            {errors.artist && 'Artist is required'}

            <button type="submit">Add artist</button>
        </form>
    );
};

export default AddArtistForm;
