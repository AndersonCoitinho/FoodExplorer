import styled from "styled-components";

export const Container = styled.div`
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    display: flex;
    flex-direction: column;
    align-items: center;

    .ingredient {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    > a {
        text-decoration: none; 
        color: inherit; 
    }

    > h1 {
        font-family: 'Poppins', sans-serif;
        font-size: 32px;
        font-weight: 600;
    }
`;

export const Form = styled.div`
    margin-top: 3.2rem;    
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

export const Lad = styled.div`
    margin-top: 3.2rem;
    display: flex;
    justify-content: flex-end;
`;

export const Sup = styled.div`
    font-family: 'Poppins', sans-serif;
    width: 112rem;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    
    > button {
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        text-decoration: none;
        font-weight: 800;
        font-size: 2.4rem;
        border: none;
        background: transparent;
        display: flex;
        align-items: center;
        margin-top: 4rem;
    }

    > h1 {
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        font-weight: 500;
        margin-top: 2.4rem;
    } 
`;