import styled from 'styled-components'; 
 

export const Container = styled.div`
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    > a {
        text-decoration: none; 
        color: inherit; 
    }
`;

export const Dish = styled.div`
    width: 112rem;
    display: flex;

    > img {
        width: 39rem
    }
`;

export const Description = styled.div`
    width: 68rem;
    height: 30rem;
    font-family: 'Poppins', sans-serif;

    > h1 { 
        font-weight: 500;
    }

    > p {
        font-weight: 300;
    }
`;

export const Inte = styled.div`
`;

