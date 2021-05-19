import { media } from 'styled-bootstrap-grid';
import styled from 'styled-components';

const StyledFooter = styled.div`
    margin-top: auto;
    padding: 0 24px 24px;
    line-height: 1.4;

    ${media.md`
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        padding: 0 60px 60px;
    `}

    .copy {
        display: inline-block;
        margin-bottom: 16px;

        ${media.md`
            margin-bottom: 0;
        `}
    }

    a {
        color: #fff;

        &:hover {
            text-decoration: none;
        }
    }

    .coffee {
        font-family: 'Cookie', cursive;
        color: #000;
        background-color: #fcbb13;
        height: 40px;
        border-radius: 20px;
        font-size: 24px;
        line-height: 1;
        padding: 0px 16px;
        text-decoration: none;
        display: inline-flex;
        align-items: center;

        ${media.md`
            margin-left: 16px;
        `}

        svg {
            height: 24px;
            flex-shrink: 0;
        }
    }

    .coffeeText {
        margin-left: 8px;
        display: inline-block;
        line-height: 0;
        width: 100%;
        flex-shrink: 0;
    }
`;

export default StyledFooter;
