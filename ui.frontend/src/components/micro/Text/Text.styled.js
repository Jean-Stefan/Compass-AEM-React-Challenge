import styled from 'styled-components';

const StyledText = styled.p`
    width: 100%;
    font-family: 'Space Mono', monospace;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;
    letter-spacing: -0.035em;
    color: ${({color}) => color || '#4f4f4f'};
    margin: 0 0 64px 0;

    @media (max-width: 768px) {
        font-size: 18px;
        line-height: 27px;
    }
`;

export default StyledText;
