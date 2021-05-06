import to from 'await-to-js';
import debounce from 'lodash.debounce';
import React, { useCallback, useRef, useState } from 'react';
import ReactGA from 'react-ga';
import { useDispatch, useSelector } from 'react-redux';
import SpotifyWebApi from 'spotify-web-api-js';
import { ReactComponent as Artist } from '../../static/svg/Artist.svg';
import { ReactComponent as Search } from '../../static/svg/Search.svg';
import { addArtist } from '../../store/artistsSlice';
import { RootState } from '../../store/reducers';
import {
    StyledForm,
    StyledFormControl,
    StyledFormGroup,
    StyledFormLabel,
} from '../Form/Form.styles';
import StyledAddArtistForm from './AddArtistForm.styles';

const AddArtistForm: React.FC = () => {
    const artists = useSelector((state: RootState) => state.artists);
    const dispatch = useDispatch();
    const spotifyApi = useRef(new SpotifyWebApi());
    const [options, setOptions] = useState<SpotifyApi.ArtistObjectFull[]>([]);
    const [inputValue, setInputValue] = useState('');

    const debouncedSave = useCallback(
        debounce((newValue: string) => searchArtist(newValue), 450),
        []
    );

    const updateValue = (newValue: string) => {
        setInputValue(newValue);

        if (newValue.length > 2) {
            debouncedSave(newValue);
        } else {
            setOptions([]);
        }
    };

    const searchArtist = async (artist: string) => {
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
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (options.length > 0) {
            ReactGA.event({
                category: 'Artists',
                action: 'User added an artist',
                label: options[0].name,
            });

            dispatch(addArtist(options[0]));
            updateValue('');
            setOptions([]);
        }
    };

    return (
        <StyledAddArtistForm>
            <StyledForm autoComplete="off" onSubmit={handleSubmit}>
                <StyledFormGroup>
                    <StyledFormLabel htmlFor="artist">
                        Add up to <span className="highlight">5</span> artists
                    </StyledFormLabel>

                    <div className="search">
                        <StyledFormControl
                            id="artist"
                            disabled={artists.length >= 5}
                            type="text"
                            value={inputValue}
                            onChange={input => updateValue(input.target.value)}
                            placeholder="Search for an artists name"
                            autoComplete="off"
                        />

                        {options.length > 0 && (
                            <ul className="autocomplete">
                                {options.map(artist => (
                                    <li
                                        tabIndex={0}
                                        key={artist.id}
                                        onClick={() => {
                                            ReactGA.event({
                                                category: 'Artists',
                                                action: 'User added an artist',
                                                label: artist.name,
                                            });

                                            dispatch(addArtist(artist));
                                            updateValue('');
                                            setOptions([]);
                                        }}
                                    >
                                        {artist.images.length > 0 ? (
                                            <img
                                                src={artist.images[0].url}
                                                alt={`${artist.name}`}
                                            />
                                        ) : (
                                            <div className="no-image">
                                                <Artist />
                                            </div>
                                        )}
                                        {artist.name}
                                    </li>
                                ))}
                            </ul>
                        )}

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
