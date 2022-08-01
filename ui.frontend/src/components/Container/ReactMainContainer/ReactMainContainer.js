import React from 'react';
import StlyedContainer from './ReactMainContainer.styled';
import Title from '../../micro/Title/Title';
import Text from '../../micro/Text/Text';
import Button from '../../micro/Button/Button';

const ReactMainContainer = ({title, text, button}) => {
    return (
        <StlyedContainer>
            <Title>{title}</Title>
            <Text>{text}</Text>
            <Button>{button}</Button>
        </StlyedContainer>
    );
};

export default ReactMainContainer;
