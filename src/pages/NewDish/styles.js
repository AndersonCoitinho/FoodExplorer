import styled from "styled-components";

export const Container = styled.div`
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    > a {
        text-decoration: none; 
        color: inherit; 
    }
`;

export const Form = styled.div`
    //background: red;
    width: 112rem;
    height: 50.8rem;

    .form-row {
        display: flex;
        justify-content: space-between; 
        align-items: center;
    }

    .form-row Input {
        margin-right: 10px; /* Adicione margem direita entre os campos */
      }
`;