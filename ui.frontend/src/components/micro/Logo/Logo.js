import React from 'react';
import StyledLogo from './Logo.styled';

const Logo = ({text, textColor}) => {
    return (
        <StyledLogo textColor={textColor}>{text ? text : 'Logo'}</StyledLogo>
    );
};

export default Logo;
