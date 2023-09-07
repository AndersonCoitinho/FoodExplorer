import styled from 'styled-components';

export const Container = styled.div`

`;

export const Form = styled.form`
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    height: 54rem;
    width: 47rem;
    padding: 6.4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 16px;

    > h1 {
        font-size: 3.2rem;
        font-family: 'Poppins', sans-serif;
        
    }
`;
