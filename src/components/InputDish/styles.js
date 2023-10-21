import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;  

    > input {
        border: 0;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        border-radius: 5px;
        height: 48px;
        width: 100%;
        padding: 12px;
        background: ${({ theme }) => theme.COLORS.DARK_800};
        margin-top: 1.6rem;
        outline: none;
    }

`;