import styled from 'styled-components';
import { map } from 'styled-components-breakpoint';
import { typography } from '../../styles/typography';

const StyledProfile = styled.div`
    display: flex;
    align-items: center;
    padding: 232px 0 96px;

    .highlight {
        color: #87fa5f;
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
