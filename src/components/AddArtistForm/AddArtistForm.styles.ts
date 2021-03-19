import styled from 'styled-components';
import { StyledFormControl } from '../Form/Form.styles';

const StyledAddArtistForm = styled.div`
    .search {
        position: relative;

        ${StyledFormControl} {
            padding-left: 56px;
        }
    }

    .autocomplete {
        position: absolute;
        top: calc(100% - 8px);
        left: 0;
        width: 100%;
        height: 245px;
        overflow: scroll;
        list-style: none;
        padding: 20px;
        background-color: #000;
        border: 1px solid #3b484d;
        border-top-color: #14181a;
        border-radius: 0 0 8px 8px;
        z-index: 90;
        scrollbar-width: none;
        -ms-overflow-style: none;

        &::-webkit-scrollbar {
            display: none;
        }

        li {
            display: flex;
            align-items: center;
            font-size: 18px;
            margin-bottom: 20px;
            cursor: pointer;

            &:hover {
                color: #87fa5f;
            }
        }

        img {
            width: 72px;
            height: 72px;
            display: block;
            margin-right: 16px;
            border-radius: 8px;
            object-fit: cover;
        }

        .no-image {
            background-color: #14181a;
            width: 72px;
            height: 72px;
            margin-right: 16px;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;

            svg {
                width: 36px;
                fill: #7f7f7f;
            }
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
