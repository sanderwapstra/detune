import React from 'react';
import StyledTagline from './Tagline.styles';

const Tagline: React.FC = () => (
    <StyledTagline>
        Generate <span className="greenLight">tailored playlists</span> based on{' '}
        <span className="greenDark">artists you love</span> and{' '}
        <span className="purple">tuned to your preferences</span>.
    </StyledTagline>
);

export default Tagline;
