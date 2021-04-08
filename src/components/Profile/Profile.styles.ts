import { media } from 'styled-bootstrap-grid';
import styled from 'styled-components';
import { map } from 'styled-components-breakpoint';
import { Colors } from '../../styles/colors';
import { typography } from '../../styles/typography';

const StyledProfile = styled.div`
    display: flex;
    align-items: center;
    padding: 120px 0 16px;

    ${media.sm`
        padding: 200px 0 64px;
    `}

    .highlight {
        color: ${Colors.green};
    }
`;

const StyledProfileImage = styled.img`
    display: block;
    width: 96px;
    height: 96px;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 24px;
`;

const StyledProfileTitle = styled.h1`
    line-height: 1.25;
    font-weight: 700;
    margin-bottom: 24px;

    ${map(typography.h1, (fontSize: string) => `font-size: ${fontSize};`)};
`;

export { StyledProfile, StyledProfileImage, StyledProfileTitle };
