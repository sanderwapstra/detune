import styled from 'styled-components';

const StyledSelectedArtists = styled.div`
    margin-bottom: 48px;

    ol {
        list-style: none;
        padding-left: 0;
        display: flex;
        flex-wrap: wrap;
        margin: 0 -16px;
        width: calc(100% + 32px);
    }

    li {
        position: relative;
        width: calc(20% - 32px);
        margin: 0 16px;
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
    }

    img {
        display: block;
        width: 100%;
        height: auto;
        border-radius: 16px;
        margin-bottom: 8px;
    }

    .placeholder {
        border-radius: 16px;
        height: 0;
        padding-bottom: calc(20% - 32px);
        border: 1px solid #3b484d;
    }
`;

export default StyledSelectedArtists;
