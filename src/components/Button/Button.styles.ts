import styled from 'styled-components';
import { typography } from '../../styles/typography';
import { map } from 'styled-components-breakpoint';
import { media } from 'styled-bootstrap-grid';
import { Colors } from '../../styles/colors';

const StyledButton = styled.button`
    display: inline-block;
    font-family: 'Nunito', sans-serif;
    font-weight: 800;
    line-height: 1;
    background-color: ${Colors.green};
    color: ${Colors.grayscale1};
    border: 0;
    border-radius: 28px;
    padding: 16px 32px;
    cursor: pointer;
    text-decoration: none;

    ${map(typography.button, (fontSize: string) => `font-size: ${fontSize};`)};

    ${media.sm`
        padding: 28px 40px;
        border-radius: 40px;
    `}
`;

export default StyledButton;
