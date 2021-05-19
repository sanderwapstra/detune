import React from 'react';
import { ReactComponent as Coffee } from '../../static/svg/Coffee.svg';
import StyledFooter from './Footer.styles';

const Footer: React.FC = () => (
    <StyledFooter>
        <span className="copy">
            Made with ♥ by{' '}
            <a href="mailto:sanderwapstra@gmail.com">Sander Wapstra</a>.
            Discovered some nice tunes?{' '}
        </span>
        <a
            className="coffee"
            rel="noopener noreferrer"
            target="_blank"
            href="http://buymeacoffee.com/sanderwapstra"
        >
            <Coffee />
            <span className="coffeeText">Buy me a coffee</span>
        </a>
    </StyledFooter>
);

export default Footer;
