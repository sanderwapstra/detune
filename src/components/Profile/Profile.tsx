import React from 'react';
import { StyledProfile, StyledProfileTitle } from './Profile.styles';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';

const Profile: React.FC = () => {
    const { user } = useSelector((state: RootState) => state.app);

    if (!user) return null;

    return (
        <StyledProfile>
            {/* {user && user.images && user.images.length > 0 && (
                <StyledProfileImage src={user.images[0].url} alt="" />
            )} */}
            <StyledProfileTitle>
                Hi, <span className="highlight">{user.display_name}</span>!
                Let&rsquo;s generate your tailored playlist
            </StyledProfileTitle>
        </StyledProfile>
    );
};

export default Profile;
