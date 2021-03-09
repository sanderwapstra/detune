import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import { StyledProfile, StyledProfileTitle } from './Profile.styles';

const Profile: React.FC = () => {
    const { user } = useSelector((state: RootState) => state.app);

    if (!user) return null;

    return (
        <StyledProfile>
            <StyledProfileTitle>
                Hi, <span className="highlight">{user.display_name}</span>!
                Let&rsquo;s generate your tuned playlist.
            </StyledProfileTitle>
        </StyledProfile>
    );
};

export default Profile;
