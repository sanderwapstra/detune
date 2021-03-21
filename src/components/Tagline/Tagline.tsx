import React from 'react';
import StyledTagline from './Tagline.styles';

const Tagline: React.FC = () => (
    <StyledTagline>
        Generate <span className="highlight">tuned Spotify playlists</span>{' '}
        based on your preferences.
    </StyledTagline>
);

export default Tagline;
