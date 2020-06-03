import React from 'react';
import StyledTagline from './Tagline.styles';

const Tagline: React.FC = () => (
    <StyledTagline>
        Generate <span className="highlight">tailored playlists</span> based on
        artists you love and tuned to your preferences.
    </StyledTagline>
);

export default Tagline;
