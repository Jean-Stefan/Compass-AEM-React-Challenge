import styled from 'styled-components';

const StyledButton = styled.button`
    width: 216px;
    height: 68px;
    background: ${({background}) => background || '#333333'};
    color: ${({color}) => color || '#ffffff'};
    font-size: 14px;
    font-weight: 700;
    font-family: 'Space Mono', monospace;
    letter-spacing: -0.035em;
    text-transform: uppercase;
`;

export default StyledButton;
