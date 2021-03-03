import styled from 'styled-components';
import { media } from 'styled-bootstrap-grid';

const StyledLogo = styled.div`
    position: absolute;
    top: 24px;
    left: 24px;
    font-weight: 900;
    font-size: 24px;
    color: #87fa5f;

    ${media.sm`
        top: 60px;
        left: 60px;
    `}
`;

export default StyledLogo;
