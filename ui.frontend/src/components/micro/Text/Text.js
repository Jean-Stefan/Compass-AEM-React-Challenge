import React from 'react';
import StyledText from './Text.styled';

const Text = ({children, color}) => {
    return (
        <StyledText color={color}>{children ? children : 'Text'}</StyledText>
    );
};

export default Text;
