import styled from 'styled-components';
import { media } from 'styled-bootstrap-grid';

const StyledLogo = styled.div`
    position: absolute;
    top: 32px;
    left: 32px;
    font-weight: 900;
    font-size: 24px;
    letter-spacing: 1px;
    color: #87fa5f;

    ${media.sm`
    top: 64px;
    left: 64px;
    `}
`;

export default StyledLogo;
