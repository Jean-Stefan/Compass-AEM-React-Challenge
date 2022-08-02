import React from 'react';
import StyledFooterText from './FooterText.styled';

const FooterText = ({text, color}) => {
    return (
        <StyledFooterText color={color}>
            {text ? text : 'Footer Text'}
        </StyledFooterText>
    );
};

export default FooterText;
