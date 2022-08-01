import React from 'react';
import StyledTitle from './Title.styled';

const Title = ({children, color}) => {
    return (
        <StyledTitle color={color}>{children ? children : 'Title'}</StyledTitle>
    );
};

export default Title;
