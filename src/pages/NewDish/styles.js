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
        margin-right: 10px; 
      }

    #categoria {
        border: 2px solid ${({ theme }) => theme.COLORS.LIGHT_700}; 
        border-radius: 5px;
        height: 4.8rem;
        background:transparent;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        width: 36.4rem;
    }

    #categoria option {
    font-size: 14px;
    color: #333;
}

    .category {
        margin-top: 8px;
    }
`;