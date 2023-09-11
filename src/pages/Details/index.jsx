import { Container, Dish, Description } from './styles';
import { AiOutlineLeft } from 'react-icons/ai'
import Gambe from '../../assets/Gambe_400.svg';

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

import { Section } from '../../components/Section'
import { NoteItem } from '../../components/NoteItem'

export function Details({ data, ...rest }) {
    return (
        <Container {...rest}>
            <Header />
            <a href="">
                <AiOutlineLeft />
                voltar
            </a>
            <Dish>
                <img
                    src={Gambe}
                    alt="Gambe">
                </img>
                <Description>
                    <h1>Salada Ravanello</h1>
                    <p>Rabanetes, folhas verdes e molho agrídoce salpicados com gergelim. O pão naan dá um toque especial.</p>
                </Description>

                <Section title="Marcadores">
                    <div className='tags'>
                        <NoteItem value="react" />
                        <NoteItem isNew placeholder="Novo Marcador" />
                    </div>
                </Section>

            </Dish>

            <Footer />
        </Container>
    )
}