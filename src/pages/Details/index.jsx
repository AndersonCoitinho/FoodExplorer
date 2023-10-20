import { Container, Dish, Description } from './styles';
import { AiOutlineLeft } from 'react-icons/ai'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Header } from '../../components/Header'
import { HeaderAdmin } from '../../components/HeaderAdmin'
import { Footer } from '../../components/Footer'
import { Ingredients } from '../../components/Ingredients'
import { ButtonDish } from '../../components/ButtonDish'
import { api } from '../../services/api'
import { useAuth } from '../../hooks/auth';
import { Section } from '../../components/Section'
import { Quantity } from '../../components/Quantity'
import photoPlaceholder from '../../assets/photoPlaceholder.jpg';

export function Details({ data, ...rest }) {
    const [plates, setPlates] = useState(null);
    const [ingre, setIngredients] = useState(null);
    const { user } = useAuth()
    const params = useParams();
    const plates_id = params.plates_id



    useEffect(() => {
        async function fetchPlates() {
            const response = await api.get(`/plates/${plates_id}`);
            setPlates(response.data.plates)
            setIngredients(response.data.ingredients)
        }

        fetchPlates();
    }, [plates_id]);

    const photoUrl = plates && plates.photo
        ? `${api.defaults.baseURL}/files/${plates.photo}`
        : photoPlaceholder;


    function formatCurrency(value) {
        // Remove tudo o que não for dígito
        const numericValue = value.replace(/\D/g, '');
        // Formata para "R$ 00,00"
        const formattedValue = (numericValue / 100).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        });
        return formattedValue;
    }


    return (
        <Container {...rest}>
            {user.isAdmin === 1 ? (
                <HeaderAdmin />
            ) : (
                <Header />
            )}
            <a href="/">
                <AiOutlineLeft />
                voltar
            </a>
            {
                plates &&
                <Dish>
                    <div className='image-container'>
                        <img
                            src={photoUrl}
                            alt={plates.name}>
                        </img>
                    </div>
                    <Description>
                        <h1>{plates.name}</h1>
                        <p>{plates.description}</p>

                        {ingre &&
                            <Section>
                                {
                                    ingre.map(ingredient => (
                                        <Ingredients
                                            key={String(ingredient.plates_id)}
                                            title={ingredient.name}
                                        />

                                    ))
                                }
                            </Section>
                        }


                        <div className='Quantity'>
                            <Quantity />
                            <ButtonDish title={`incluir - ${formatCurrency(plates.value)}`} />
                        </div>
                    </Description>

                </Dish>
            }
            <Footer />
        </Container>
    )
}