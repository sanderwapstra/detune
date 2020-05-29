import styled from 'styled-components';

const StyledProfile = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 32px;
`;

const StyledProfileImage = styled.img`
    display: block;
    width: 96px;
    height: 96px;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 24px;
`;

export { StyledProfile, StyledProfileImage };
