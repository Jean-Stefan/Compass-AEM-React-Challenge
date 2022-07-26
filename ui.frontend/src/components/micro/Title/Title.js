import React from 'react';
import StyledTitle from './Title.styled';

const Title = ({text}) => {
    return <StyledTitle>{text ? text : 'Title'}</StyledTitle>;
};

export default Title;
