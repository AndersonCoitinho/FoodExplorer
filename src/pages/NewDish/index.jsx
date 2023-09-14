import { Container, Form } from './styles'
import { AiOutlineLeft } from 'react-icons/ai'
import { HeaderAdmin } from '../../components/HeaderAdmin'
import { Input } from '../../components/Input'
import { Footer } from '../../components/Footer'
import { NoteIngredient } from '../../components/NoteIngredient'
import { ButtonDish } from '../../components/ButtonDish'
import { Link } from 'react-router-dom'

export function NewDish() {
    return (
        <Container>
            <HeaderAdmin />
            <Link to="/">
                <AiOutlineLeft />
                voltar
            </Link>
            <h1>Adicionar prato</h1>
            <Form>
                <div className="form-row">
                    <Input
                        title="Imagem do prato"
                        type="file"
                    />

                    <Input
                        title="Nome"
                        placeholder="Ex.: Salada Ceasar"
                        type="text"
                    />
                    <div className='category'>
                        Categoria
                        <select id="categoria" name="categoria">
                            <option value="opcao1">Refeição</option>
                            <option value="opcao2">Sobremesa</option>
                            <option value="opcao3">Bebida</option>
                        </select>
                    </div>
                </div>


                    <NoteIngredient value="Pão Nann" />
                    <NoteIngredient isNew placeholder="Adicionar" />


                <Input
                    title="Preço"
                    placeholder="R$ 00,00"
                    type="text"
                />

                <Input
                    title="Descrição"
                    placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                    type="text"
                />

                <ButtonDish title ="Salvar alterações" />
            </Form>

            <Footer />
        </Container>
    )
}