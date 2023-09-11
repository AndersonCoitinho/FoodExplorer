import styled from 'styled-components';


export const Container = styled.div`
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    display: flex;
    flex-direction: column;

    > a {
        text-decoration: none; 
        color: inherit; 
        font-size: 2.4rem;
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
        margin-left: 20%;
        margin-top: 2.4rem;
        margin-bottom: 4.2rem;
    }
`;

export const Dish = styled.div`
    width: 112rem;
    display: flex;
    margin: auto !important;

    > img {
        width: 39rem
    }
`;

export const Description = styled.div`
    width: 68rem;
    height: 30rem;
    font-family: 'Poppins', sans-serif;
    margin-left: 4.7rem;
    margin-top: 6rem;

    > h1 { 
        font-weight: 500;
        margin-bottom: 2.4rem;
    }

    > p {
        font-weight: 300;
        margin-bottom: 2.4rem;
    }

    .Quantity {
        display: flex;
        align-items: center;
        gap: 3.3rem;
        margin-top: 4.8rem;
    }
`;


