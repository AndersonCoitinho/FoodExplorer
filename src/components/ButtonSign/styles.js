import styled from 'styled-components';

export const Container = styled.button`
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    height: 48px;
    width: 100%;
    border-radius: 5px;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 1.4rem;
    font-family: 'Poppins', sans-serif;
`;
