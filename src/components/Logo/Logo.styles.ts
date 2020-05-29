import styled from 'styled-components';
import { media } from 'styled-bootstrap-grid';

const StyledLogo = styled.div`
    font-weight: 700;
    font-size: 24px;
    letter-spacing: 1px;
    padding: 32px 0;

    ${media.sm`
        padding: 32px 16px 72px;
    `}
`;

export default StyledLogo;
