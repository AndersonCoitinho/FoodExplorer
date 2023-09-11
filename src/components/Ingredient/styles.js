import styled from "styled-components";

export const Container = styled.span`
    background: ${({ theme }) => theme.COLORS.DARK_1000};
    height: 32px;
    margin-right: 10px;
    padding: 8px;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    border-radius: 5px;
`;