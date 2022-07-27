import React from 'react';
import StyledFooterText from './FooterText.styled';

const FooterText = ({text}) => {
    return <StyledFooterText>{text ? text : 'Footer Text'}</StyledFooterText>;
};

export default FooterText;
