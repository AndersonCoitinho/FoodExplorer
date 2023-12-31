import styled from 'styled-components';

export const Container = styled.div`
    display: flex;

    > img {
        margin: 20% 0rem 43rem 20%;
        width: 32rem;
    }
    
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
    margin-left: 20rem;
    margin-top: 20rem;

    > h1 {
        font-size: 3.2rem;
        font-family: 'Poppins', sans-serif;
    }

    > a {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    @media (max-width: 1750px) {
        margin-top: 5rem;
    }
`;
