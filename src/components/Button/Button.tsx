import React from 'react';
import StyledButton from './Button.styles';

type Props = {
    disabled?: boolean;
    click?: () => void;
    type?: 'button' | 'submit' | 'reset' | undefined;
};

const Button: React.FC<Props> = ({
    disabled = false,
    click,
    type = 'button',
    children,
}) => {
    return (
        <StyledButton disabled={disabled} type={type} onClick={click}>
            {children}
        </StyledButton>
    );
};

export default Button;
