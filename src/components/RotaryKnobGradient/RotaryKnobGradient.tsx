import React from 'react';
import StyledRotaryKnobGradient from './RotaryKnobGradient.styles';

const RotaryKnobGradient: React.FC = () => (
    <StyledRotaryKnobGradient>
        <defs>
            <linearGradient id="rotaryKnobGradient">
                <stop offset="0%" stopColor="#ff3e13" />
                <stop offset="31.25%" stopColor="#fcbb13" />
                <stop offset="62.5%" stopColor="#87fa5f" />
            </linearGradient>
        </defs>
    </StyledRotaryKnobGradient>
);

export default RotaryKnobGradient;
