import React from 'react';
import { StyledProfile, StyledProfileImage } from './Profile.styles';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';

const Profile: React.FC = () => {
    const { user } = useSelector((state: RootState) => state.app);

    if (!user) return null;

    return (
        <StyledProfile>
            {user && user.images && user.images.length > 0 && (
                <StyledProfileImage src={user.images[0].url} alt="" />
            )}
            <h1>Hi, {user.display_name}!</h1>
        </StyledProfile>
    );
};

export default Profile;
