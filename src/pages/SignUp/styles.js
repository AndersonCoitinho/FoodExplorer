import styled from 'styled-components';

export const Container = styled.div`
    display: flex;

    > img {
        margin: 20% 0rem 43rem 15%;
        width: 32rem;
    }
    
`;

export const Form = styled.form`
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    height: 62rem;
    width: 47rem;
    padding: 6.4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 16px;
    margin-left: 20rem;
    margin-top: 10rem;

    > h1 {
        font-size: 3.2rem;
        font-family: 'Poppins', sans-serif;  
    }

    > a {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
`;
