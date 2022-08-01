import React from 'react';
import StyledText from './Text.styled';

const Text = ({children}) => {
    return <StyledText>{children ? children : 'Text'}</StyledText>;
};

export default Text;
