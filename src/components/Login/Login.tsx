import React from 'react';
import { loginWithSpotify } from '../../utils/loginWithSpotify';
import Button from '../Button/Button';
import Tagline from '../Tagline/Tagline';
import StyledLogin from './Login.styles';

const Login: React.FC = () => (
    <StyledLogin>
        <Tagline />
        <Button click={loginWithSpotify}>Login with Spotify</Button>
    </StyledLogin>
);

export default Login;
