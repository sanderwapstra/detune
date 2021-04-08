import styled from 'styled-components';
import { map } from 'styled-components-breakpoint';
import { typography } from '../../styles/typography';
import { media } from 'styled-bootstrap-grid';
import { Colors } from '../../styles/colors';

const StyledTagline = styled.h1`
    line-height: 1.25;
    font-weight: 700;
    margin-bottom: 28px;

    ${map(typography.h1, (fontSize: string) => `font-size: ${fontSize};`)};

    ${media.sm`
        margin-bottom: 40px;
    `}

    .highlight {
        color: ${Colors.green};
    }
`;

export default StyledTagline;
