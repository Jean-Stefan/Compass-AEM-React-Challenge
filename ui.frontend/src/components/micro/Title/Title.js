import React from 'react';
import StyledTitle from './Title.styled';

const Title = ({children}) => {
    return <StyledTitle>{children ? children : 'Title'}</StyledTitle>;
};

export default Title;
