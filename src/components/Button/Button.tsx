import React from 'react';
import StyledButton from './Button.styles';

type Props = {
    href?: string;
    disabled?: boolean;
    click?: () => void;
    type?: 'button' | 'submit' | 'reset' | undefined;
};

const Button: React.FC<Props> = ({
    href,
    disabled = false,
    click,
    type = 'button',
    children,
}) => {
    return href ? (
        <StyledButton as="a">{children}</StyledButton>
    ) : (
        <StyledButton disabled={disabled} type={type} onClick={click}>
            {children}
        </StyledButton>
    );
};

export default Button;
