import styled from 'styled-components';
import { typography } from '../../styles/typography';
import { map } from 'styled-components-breakpoint';

const StyledButton = styled.button`
    display: inline-block;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    line-height: 1;
    background-color: #1db954;
    color: #fff;
    border: 0;
    border-radius: 28px;
    padding: 16px 32px;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 2px;
    transition: background-color 0.2s;

    ${map(typography.button, (fontSize: string) => `font-size: ${fontSize};`)};

    &:hover {
        background-color: #1ed760;
    }
`;

export default StyledButton;
