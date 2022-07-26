import React from 'react';
import StyledButton from './Button.styled';

const Button = ({text}) => {
    return <StyledButton>{text ? text : 'Button Name'}</StyledButton>;
};

export default Button;
