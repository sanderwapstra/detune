import styled from 'styled-components';
import { Colors } from '../../styles/colors';
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
        background-color: ${Colors.grayscale1};
        border: 1px solid ${Colors.grayscale3};
        border-top-color: ${Colors.grayscale2};
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
                color: ${Colors.green};
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
            background-color: ${Colors.grayscale2};
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

    .searchBtn {
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
            fill: ${Colors.white};
        }
    }

    .highlight {
        color: ${Colors.green};
    }

    .swiper-slide {
        width: auto;
    }

    .playlist {
        display: block;
        width: calc(1124px * 0.2 - 32px);
        text-decoration: none;
        font-size: 16px;
        color: ${Colors.green};
        margin-bottom: 24px;
    }

    .playlistImage {
        max-width: 100%;
        border-radius: 16px;
        margin-bottom: 8px;
    }

    .playlistName {
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;

export default StyledAddArtistForm;
