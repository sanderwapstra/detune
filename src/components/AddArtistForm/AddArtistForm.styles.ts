import styled from 'styled-components';

const StyledAddArtistForm = styled.form`
    position: relative;
    margin-bottom: 32px;

    input {
        border: 0;
        padding: 24px 32px;
        width: 100%;
        display: block;
        background: #333;
        border-radius: 8px;
        font-weight: 700;
        font-size: 24px;
        color: #fff;

        &::placeholder {
            color: #fff;
        }
    }

    button {
        position: absolute;
        top: 50%;
        right: 24px;
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
`;

export default StyledAddArtistForm;
