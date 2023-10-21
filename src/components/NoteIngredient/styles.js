import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    background-color: ${({ theme, $isNew }) => $isNew ? "transparente" : theme.COLORS.LIGHT_600 };
    border: ${({ $isNew }) => $isNew ? `2px dashed #7C7C8A` : 'none' };
    border-radius: 10px;
    padding-right: 16px;

    > button {
        border: none;
        background: none;
    }

    .button-delete {
        color: ${({ theme }) => theme.COLORS.LIGHT_100 };
    }

    .button-add {
        color: ${({ theme }) => theme.COLORS.LIGHT_500 };
    }

    > input {
        height: 3.2rem;
        width: 11.8rem; 
        padding-left: 12px;
        color: ${({ theme }) => theme.COLORS.LIGHT_100 };
        background: transparent;
        border: none;
        outline: none;
    }
`;