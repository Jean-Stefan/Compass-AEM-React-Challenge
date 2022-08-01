import React from 'react';
import StlyedContainer from './ReactMainContainer.styled';
import Title from '../../micro/Title/Title';
import Text from '../../micro/Text/Text';
import Button from '../../micro/Button/Button';

const ReactMainContainer = ({
    title,
    titleColor,
    text,
    textColor,
    button,
    buttonTextColor,
    buttonBkgdColor,
}) => {
    return (
        <StlyedContainer>
            <Title color={titleColor}>{title}</Title>
            <Text color={textColor}>{text}</Text>
            <Button color={buttonTextColor} background={buttonBkgdColor}>
                {button}
            </Button>
        </StlyedContainer>
    );
};

export default ReactMainContainer;
