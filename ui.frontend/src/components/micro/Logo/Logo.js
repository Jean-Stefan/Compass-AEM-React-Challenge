import React from 'react';
import StyledLogo from './Logo.styled';

const Logo = ({text}) => {
    return <StyledLogo>{text ? text : 'Logo'}</StyledLogo>;
};

export default Logo;
