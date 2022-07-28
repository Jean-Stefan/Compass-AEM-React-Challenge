import styled from 'styled-components';

const StyledTitle = styled.h1`
    font-family: 'Space Mono', monospace;
    font-size: 64px;
    font-weight: 700;
    color: #333333;
    letter-spacing: -0.035em;
    line-height: 95px;
    @media (max-width: 768px) {
        font-size: 48px;
        line-height: 71px;
    }
`;

export default StyledTitle;
