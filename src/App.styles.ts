import { Container, media } from 'styled-bootstrap-grid';
import styled from 'styled-components';

const StyledApp = styled.div`
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;

    ${media.xs`
        min-height: stretch;
    `}

    ${Container} {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`;

export default StyledApp;
