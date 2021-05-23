import { media } from 'styled-bootstrap-grid';
import styled from 'styled-components';
import { map } from 'styled-components-breakpoint';
import { typography } from '../../styles/typography';

const StyledProductList = styled.div`
    .title {
        ${map(typography.h3, (fontSize: string) => `font-size: ${fontSize};`)};
    }

    ul {
        list-style: none;
        padding-left: 0;
        display: flex;
        flex-wrap: wrap;
        margin: 0 -8px;
        width: calc(100% + 16px);

        ${media.sm`
            margin: 0 -16px 32px;
            width: calc(100% + 32px);
        `}
    }

    li {
        position: relative;
        width: calc(33.33% - 16px);
        margin: 0 8px 16px;

        ${media.sm`
            width: calc(20% - 32px);
            margin: 0 16px 16px;
        `}
    }

    a {
        color: #87fa5f;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }

    .image {
        position: relative;
        height: 0;
        padding-top: 100%;
        overflow: hidden;
        margin-bottom: 8px;
        background-color: #fff;
        border-radius: 16px;
    }

    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: contain;
        padding: 15px;
    }

    .more {
        display: flex;
        align-items: center;

        svg {
            fill: #87fa5f;
            margin-left: 8px;
        }
    }
`;

export default StyledProductList;
