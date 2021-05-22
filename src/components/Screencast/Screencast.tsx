import React from 'react';
import StyledScreencast from './Screencast.styles';
import videoFile from '../../static/screencast.mp4';

const Screencast: React.FC = () => (
    <StyledScreencast>
        <video autoPlay loop playsInline muted>
            <source src={videoFile} type="video/mp4" />
        </video>
    </StyledScreencast>
);

export default Screencast;
