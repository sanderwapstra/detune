import to from 'await-to-js';
import React, { useRef } from 'react';
import ReactGA from 'react-ga';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import SpotifyWebApi from 'spotify-web-api-js';
import { ReactComponent as Search } from '../../static/svg/Search.svg';
import { addArtist } from '../../store/artistsSlice';
import { RootState } from '../../store/reducers';
import {
    StyledForm,
    StyledFormControl,
    StyledFormGroup,
    StyledFormHelpText,
    StyledFormLabel,
} from '../Form/Form.styles';
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
            console.error(`❌ Adding artist failed: ${err}`);
        }

        if (results && results.artists && results.artists.items.length > 0) {
            ReactGA.event({
                category: 'Artists',
                action: 'User added an artist',
                label: results.artists.items[0].name,
            });

            dispatch(addArtist(results.artists.items[0]));

            formRef.current?.reset();
            inputRef.current?.focus();
        }
    };

    return (
        <StyledAddArtistForm>
            <StyledForm ref={formRef} onSubmit={handleSubmit(onSubmit)}>
                <StyledFormGroup>
                    <StyledFormLabel htmlFor="artist">
                        Add up to <span className="highlight">5</span> artists
                    </StyledFormLabel>
                    <StyledFormHelpText>
                        Need some inspiration? How about exploring{' '}
                        <a href="/#" className="highlight">
                            Mexico City&rsquo;s Acid House
                        </a>{' '}
                        or{' '}
                        <a href="/#" className="highlight">
                            Ireland&rsquo;s Hip-Hop Scene
                        </a>
                        ?
                    </StyledFormHelpText>

                    <div className="search">
                        <StyledFormControl
                            id="artist"
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
                    </div>
                </StyledFormGroup>
            </StyledForm>
        </StyledAddArtistForm>
    );
};

export default AddArtistForm;
