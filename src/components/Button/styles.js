import styled, {css} from 'styled-components';

export const ButtonContainer = styled.button`
    padding: 20px;
    background-color: #787878;
    color: #FFFFFF;
    font-size: 24px;
    font-weight: 700;

    flex: 25%;
    
    &:hover {
        opacity: 0.6;
    }

    ${({variant}) => variant === "operation" && css`
    background-color: #f0264b;
    `}

    ${({variant}) => variant === "special" && css`
    background-color: #f53b5d;
    `}

    ${({variant}) => variant === "zero" && css`
    flex: 50%;
    `}
`