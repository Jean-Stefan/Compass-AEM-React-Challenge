import React from 'react';
import StyledButton from './Button.styled';

const Button = ({children}) => {
    return <StyledButton>{children ? children : 'Button Name'}</StyledButton>;
};

export default Button;
