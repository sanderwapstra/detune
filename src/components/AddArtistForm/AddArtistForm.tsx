import to from 'await-to-js';
import debounce from 'lodash.debounce';
import React, { useCallback, useRef, useState } from 'react';
import ReactGA from 'react-ga';
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
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [options, setOptions] = useState<SpotifyApi.ArtistObjectFull[]>([]);
    const [loading, setLoading] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const debouncedSave = useCallback(
        debounce((newValue: string) => searchArtist(newValue), 1000),
        []
    );

    const updateValue = (newValue: string) => {
        setInputValue(newValue);

        if (newValue.length > 2) {
            debouncedSave(newValue);
        }
    };

    const searchArtist = async (artist: string) => {
        setLoading(true);

        const [err, results] = await to(
            spotifyApi.current.search(artist, ['artist'])
        );

        if (err) {
            console.error(`❌ Adding artist failed: ${err}`);
        }

        if (results && results.artists && results.artists.items.length > 0) {
            setOptions(results.artists.items);
        } else {
            setOptions([]);
        }

        setLoading(false);
    };

    return (
        <StyledAddArtistForm>
            <StyledForm ref={formRef}>
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
                            ref={inputRef}
                            id="artist"
                            disabled={artists.length >= 5}
                            type="text"
                            value={inputValue}
                            onChange={input => updateValue(input.target.value)}
                            placeholder="Search for an artists name"
                        />

                        <ul>
                            {loading && <li>Loading...</li>}
                            {options.length > 0 &&
                                !loading &&
                                options.map((value, index) => (
                                    <li
                                        key={value.id}
                                        onClick={() => {
                                            ReactGA.event({
                                                category: 'Artists',
                                                action: 'User added an artist',
                                                label: value.name,
                                            });

                                            dispatch(addArtist(value));
                                            updateValue('');
                                            inputRef.current?.focus();
                                            setOptions([]);
                                        }}
                                    >
                                        {value.name}
                                    </li>
                                ))}
                        </ul>

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
