import styled from 'styled-components';
import { typography } from '../../styles/typography';
import { map } from 'styled-components-breakpoint';
import { media } from 'styled-bootstrap-grid';

const StyledButton = styled.button`
    display: inline-block;
    font-family: 'Nunito', sans-serif;
    font-weight: 800;
    line-height: 1;
    background-color: #87fa5f;
    color: #0a0c0d;
    border: 0;
    border-radius: 28px;
    padding: 16px 32px;
    cursor: pointer;

    ${map(typography.button, (fontSize: string) => `font-size: ${fontSize};`)};

    ${media.sm`
        padding: 28px 40px;
        border-radius: 40px;
    `}
`;

export default StyledButton;
