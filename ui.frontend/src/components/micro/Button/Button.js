import React from 'react';
import StyledButton from './Button.styled';

const Button = ({children, color, background}) => {
    return (
        <StyledButton color={color} background={background}>
            {children ? children : 'Button Name'}
        </StyledButton>
    );
};

export default Button;
