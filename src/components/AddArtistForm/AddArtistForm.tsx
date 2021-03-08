import to from 'await-to-js';
import React, { useRef } from 'react';
import ReactGA from 'react-ga';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import SpotifyWebApi from 'spotify-web-api-js';
import { ReactComponent as Search } from '../../static/svg/Search.svg';
import { addArtist } from '../../store/artistsSlice';
import { RootState } from '../../store/reducers';
import StyledAddArtistForm from './AddArtistForm.styles';

const AddArtistForm: React.FC = () => {
    const artists = useSelector((state: RootState) => state.artists);
    const dispatch = useDispatch();
    const spotifyApi = useRef(new SpotifyWebApi());
    const formRef = useRef<HTMLFormElement | null>(null);
    const inputRef = useRef<HTMLInputElement>();
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data: any) => {
        const [err, results] = await to(
            spotifyApi.current.search(data.artist, ['artist'])
        );

        if (err) {
            console.error(`❌ Something went wrong: ${err}`);
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
        <StyledAddArtistForm ref={formRef} onSubmit={handleSubmit(onSubmit)}>
            <input
                disabled={artists.length >= 5}
                type="text"
                placeholder="Search for an artists name"
                name="artist"
                ref={e => {
                    if (e) {
                        register(e, {
                            required: true,
                        });

                        inputRef.current = e;
                    }
                }}
            />

            <button type="submit">
                <Search width="32" height="32" />
            </button>
        </StyledAddArtistForm>
    );
};

export default AddArtistForm;
