import to from 'await-to-js';
import React, { useRef } from 'react';
import ReactGA from 'react-ga';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import SpotifyWebApi from 'spotify-web-api-js';
import { addArtist } from '../store/artistsSlice';

const AddArtistForm: React.FC = () => {
    const dispatch = useDispatch();
    const spotifyApi = useRef(new SpotifyWebApi());
    const formRef = useRef<HTMLFormElement | null>(null);
    const inputRef = useRef<HTMLInputElement>();
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = async (data: any) => {
        const [err, results] = await to(
            spotifyApi.current.search(data.artist, ['artist'])
        );

        if (err) {
            console.error(`Something went wrong: ${err}`);
        }

        ReactGA.event({
            category: 'Artists',
            action: 'User added an artist',
        });

        if (results?.artists?.items) {
            dispatch(addArtist(results.artists.items[0]));

            formRef.current?.reset();
            inputRef.current?.focus();
        }
    };

    return (
        <form
            ref={formRef}
            onSubmit={handleSubmit(onSubmit)}
            style={{ marginBottom: 20 }}
        >
            <input
                type="text"
                placeholder="Artist"
                name="artist"
                ref={e => {
                    if (e) {
                        register(e, {
                            required: true,
                            maxLength: 80,
                        });

                        inputRef.current = e;
                    }
                }}
            />
            {errors.artist && 'Artist is required'}

            <button type="submit">Add artist</button>
        </form>
    );
};

export default AddArtistForm;
