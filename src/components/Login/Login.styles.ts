import { media } from 'styled-bootstrap-grid';
import styled from 'styled-components';

const StyledLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 100px 0 60px;

    ${media.sm`
        padding: 80px 0;
    `}
`;

export default StyledLogin;
