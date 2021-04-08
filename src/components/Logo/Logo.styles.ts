import styled from 'styled-components';
import { media } from 'styled-bootstrap-grid';
import { Colors } from '../../styles/colors';

const StyledLogo = styled.div`
    position: absolute;
    top: 36px;
    left: 24px;
    font-weight: 900;
    font-size: 24px;
    color: ${Colors.green};

    ${media.sm`
        top: 60px;
        left: 60px;
    `}
`;

export default StyledLogo;
