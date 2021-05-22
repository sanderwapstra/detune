import { media } from 'styled-bootstrap-grid';
import styled from 'styled-components';

const StyledScreencast = styled.div`
    display: none;
    position: fixed;
    top: 50%;
    right: 0;
    width: 60%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
    transform: translateY(-50%);

    ${media.xl`
        display: block;
    `}

    &::after {
        content: '';
        position: absolute;
        top: -10px;
        left: -10px;
        right: -10px;
        bottom: -10px;
        background: radial-gradient(
            circle,
            rgba(20, 24, 26, 0.2) 0%,
            rgba(20, 24, 26, 0.5) 50%,
            rgba(20, 24, 26, 1) 100%
        );
        transform: rotate(10deg);
    }

    video {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: left center;
        transform: rotate(10deg);
    }
`;

export default StyledScreencast;
