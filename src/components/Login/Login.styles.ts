import styled from 'styled-components';
import { media } from 'styled-bootstrap-grid';

const StyledLogin = styled.div`
    .CircularProgressbar .CircularProgressbar-path {
        stroke: url(#testGradient);
    }

    ${media.sm`
        display: flex;
        justify-content: center;
    `}
`;

export default StyledLogin;
