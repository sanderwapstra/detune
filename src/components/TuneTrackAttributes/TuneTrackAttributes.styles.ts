import styled from 'styled-components';
import { map } from 'styled-components-breakpoint';
import { typography } from '../../styles/typography';

const StyledTuneTrackAttributes = styled.div`
    margin-bottom: 16px;

    h2 {
        line-height: 1.5;
        margin-bottom: 24px;

        ${map(typography.h2, (fontSize: string) => `font-size: ${fontSize};`)};
    }

    ul {
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        margin: 0 -12px;
        padding: 0;
    }

    li {
        width: calc(50% - 24px);
        margin: 0 12px 32px;
    }
`;

export default StyledTuneTrackAttributes;
