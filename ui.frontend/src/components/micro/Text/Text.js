import React from 'react';
import StyledText from './Text.styled';

const Text = ({text}) => {
    return <StyledText>{text ? text : 'Text'}</StyledText>;
};

export default Text;
