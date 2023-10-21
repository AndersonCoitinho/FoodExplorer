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
    margin-bottom: 10rem;
    .form-row {
        display: flex;
        justify-content: space-between; 
        align-items: center;
        gap: 3.2rem;
    }

    .form-row Input {
        margin-right: 10px; 
    }

    #categoria {
        border: 0;
        border-radius: 5px;
        height: 4.8rem;
        background: ${({ theme }) => theme.COLORS.DARK_800};
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        width: 36.4rem;
        margin-top: 1.6rem;
        outline: none;
    }

    #categoria option {
        font-size: 14px;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        background: transparent;
    }  

    .category {
        margin-top: 8px;
        font-family: 'Roboto', sans-serif;
        font-size: 1.6rem;  
    }

    .ingredient{
        width: 83.7rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        font-family: 'Roboto', sans-serif;
        font-size: 1.6rem;
    }

    .back {
        background-color: ${({ theme }) => theme.COLORS.DARK_800};
        display: flex;
        width: 83.7rem;
        height: 4.8rem;
        gap: 1.6rem;
        padding: 8px;
        border-radius: 5px;
        margin-top: 1.6rem;
    }

    .ingreValue {
        display: flex;
        gap: 3.2rem;
        margin-top: 3.2rem;
    }

    .descricao {
        font-family: 'Roboto', sans-serif;
        font-size: 1.6rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        margin-top: 3.2rem;
        margin-button: 1.6rem;
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