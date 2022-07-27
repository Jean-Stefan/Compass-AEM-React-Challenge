import React from 'react';
import StyledImage from './Image.styled';

const Image = ({image}) => {
    return <StyledImage src={image && image.src} />;
};

export default Image;
