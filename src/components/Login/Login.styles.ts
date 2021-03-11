import { media } from 'styled-bootstrap-grid';
import styled from 'styled-components';

const StyledLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 120px 0;

    ${media.sm`
        min-height: 100vh;
    `}
`;

export default StyledLogin;
