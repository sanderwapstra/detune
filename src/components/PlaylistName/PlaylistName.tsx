import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setName } from '../../store/playlistSlice';
import { RootState } from '../../store/reducers';
import {
    StyledForm,
    StyledFormControl,
    StyledFormGroup,
    StyledFormLabel,
} from '../Form/Form.styles';
import StyledPlaylistName from './PlaylistName.styles';

const PlaylistName: React.FC = () => {
    const dispatch = useDispatch();
    const { name } = useSelector((state: RootState) => state.playlist);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setName(e.target.value));
    };

    return (
        <StyledPlaylistName>
            <StyledForm>
                <StyledFormGroup>
                    <StyledFormLabel htmlFor="name">
                        Name your playlist
                    </StyledFormLabel>
                    <StyledFormControl
                        id="name"
                        value={name}
                        type="text"
                        placeholder="For example..."
                        onChange={handleChange}
                    />
                </StyledFormGroup>
            </StyledForm>
        </StyledPlaylistName>
    );
};

export default PlaylistName;
