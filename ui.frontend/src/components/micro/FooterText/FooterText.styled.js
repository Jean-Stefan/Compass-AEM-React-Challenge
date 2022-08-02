import styled from 'styled-components';

const StyledFooterText = styled.p`
    color: ${({color}) => color || '#bdbdbd'};
    font-size: 14px;
    font-family: 'Montserrat';
    font-weight: 500;
    text-align: center;
    margin-top: 10%;
    margin-bottom: 0;

    @media (max-width: 1200px) and (min-width: 768px) {
        margin-top: 5%;
    }
`;

export default StyledFooterText;
