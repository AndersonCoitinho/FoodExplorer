import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};

    > input {
        border: 2px solid ${({ theme }) => theme.COLORS.LIGHT_700};
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        border-radius: 5px;
        height: 48px;
        width: 100%;
        padding: 12px;
        background:transparent;
        margin-top: 8px;
    }

`;