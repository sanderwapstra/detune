import styled from 'styled-components';
import { map } from 'styled-components-breakpoint';
import { typography } from '../../styles/typography';
import { media } from 'styled-bootstrap-grid';

const StyledTagline = styled.h1`
    line-height: 1.1;
    font-weight: 700;
    margin-bottom: 48px;

    ${map(typography.h1, (fontSize: string) => `font-size: ${fontSize};`)};

    ${media.sm`
        margin-bottom: 80px;
    `}

    .greenLight {
        color: #ccf849;
    }

    .greenDark {
        color: #46937e;
    }

    .purple {
        color: #f527a7;
    }
`;

export default StyledTagline;
