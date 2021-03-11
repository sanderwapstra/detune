import { media } from 'styled-bootstrap-grid';
import styled from 'styled-components';
import { map } from 'styled-components-breakpoint';
import { typography } from '../../styles/typography';

const StyledTuneTrackAttributes = styled.div`
    margin-bottom: 16px;

    h2 {
        line-height: 1.5;
        margin-bottom: 24px;

        ${map(typography.h3, (fontSize: string) => `font-size: ${fontSize};`)};
    }

    ul {
        list-style: none;
        padding: 0;

        ${media.sm`
            display: flex;
            flex-wrap: wrap;
            margin: 0 -12px;
        `}
    }

    li {
        margin-bottom: 32px;

        ${media.sm`
            width: calc(50% - 24px);
            margin: 0 12px 32px;
        `}
    }
`;

export default StyledTuneTrackAttributes;
