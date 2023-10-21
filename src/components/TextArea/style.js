import styled from "styled-components";

export const Container = styled.textarea`
    width: 100%;
    height: 150px;
    margin-top: 1.6rem;
    background: ${({ theme }) => theme.COLORS.DARK_800};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-family: 'Roboto', sans-serif;
    border: none;
    resize: none;
    outline: none;
    margin-bottom: 8px;
    border-radius: 10px;
    padding: 16px;

`;