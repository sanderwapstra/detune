import styled from 'styled-components';
import { media } from 'styled-bootstrap-grid';

const StyledLogo = styled.div`
    font-weight: 700;
    font-size: 20px;
    letter-spacing: 1px;
    padding: 30px 0;

    ${media.sm`
        padding: 30px 15px;
    `}
`;

export default StyledLogo;
