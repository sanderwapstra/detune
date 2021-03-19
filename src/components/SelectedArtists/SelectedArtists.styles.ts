import { media } from 'styled-bootstrap-grid';
import styled from 'styled-components';

const StyledSelectedArtists = styled.div`
    margin-top: -16px;
    margin-bottom: 24px;

    ${media.sm`
        margin-bottom: 48px;
        margin-top: -28px;
    `}

    ol {
        list-style: none;
        padding-left: 0;
        display: flex;
        flex-wrap: wrap;
        margin: 0 -8px;
        width: calc(100% + 16px);

        ${media.sm`
            margin: 0 -16px;
            width: calc(100% + 32px);
        `}
    }

    li {
        position: relative;
        width: calc(33.33% - 16px);
        margin: 0 8px 16px;

        ${media.sm`
            width: calc(20% - 32px);
            margin: 0 16px;
        `}
    }

    .info {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .name {
        color: #87fa5f;
    }

    .remove {
        background-color: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 0;
        padding: 5px;
        cursor: pointer;

        svg {
            width: 16px;
            height: 16px;
            fill: #fff;
        }

        &:hover {
            svg {
                fill: #ff3e13;
            }
        }
    }

    .image {
        position: relative;
        height: 0;
        padding-top: 100%;
        overflow: hidden;
        margin-bottom: 8px;
    }

    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 16px;
    }

    .no-image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #000;
        border-radius: 16px;
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
            width: 72px;
            fill: #7f7f7f;
        }
    }

    .placeholder {
        border-radius: 16px;
        height: 0;
        padding-bottom: calc(33.33% - 16px);
        border: 1px solid #3b484d;

        ${media.sm`
            padding-bottom: calc(20% - 32px);
        `}
    }
`;

export default StyledSelectedArtists;
