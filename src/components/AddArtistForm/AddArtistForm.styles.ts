import styled from 'styled-components';
import { StyledFormControl } from '../Form/Form.styles';

const StyledAddArtistForm = styled.div`
    .search {
        position: relative;

        ${StyledFormControl} {
            padding-left: 56px;
        }
    }

    button {
        position: absolute;
        top: 50%;
        left: 20px;
        background: none;
        transform: translateY(-50%);
        padding: 0;
        border: 0;
        cursor: pointer;

        svg {
            display: block;
            fill: #fff;
        }
    }

    .highlight {
        color: #87fa5f;
    }
`;

export default StyledAddArtistForm;
