import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    height: 48px;
    width: 100%;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 1.4rem;
    font-family: 'Poppins', sans-serif;
`;
