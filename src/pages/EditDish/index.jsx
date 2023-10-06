import { Container, Form } from './styles'
import { AiOutlineLeft } from 'react-icons/ai'
import { HeaderAdmin } from '../../components/HeaderAdmin'
import { Input } from '../../components/Input'
import { Footer } from '../../components/Footer'
import { ButtonRemove } from '../../components/ButtonRemove'
import { NoteIngredient } from '../../components/NoteIngredient'
import { ButtonDish } from '../../components/ButtonDish'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../services/api'


export function EditDish() {
    const [isLoading, setIsLoading] = useState(true); // Estado para controlar se os dados estão sendo buscados

    useEffect(() => {
        async function fetchPlates() {
            const response = await api.get(`/plates/${plates_id}`);
            setResult(response.data.plates);
            setIsLoading(false); // Marca que os dados foram buscados e a página está pronta para ser renderizada
        }
        fetchPlates();
    }, []);


    const [result, setResult] = useState()
    const [title, setName] = useState(result?.name)
    const [description, setDescription] = useState()
    const [photo, setPhoto] = useState()
    const [value, setValue] = useState()
    const [category, setCategory] = useState()

    const params = useParams();
    const plates_id = params.plates_id


    //console.log(result.name)

    if (isLoading) {
        return <div>Carregando...</div>; // Renderiza uma mensagem de carregamento enquanto os dados estão sendo buscados
    }

    return (
        <Container>
            <HeaderAdmin />
            <a href="">
                <AiOutlineLeft />
                voltar
            </a>
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
                        value={title}
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
                <ButtonRemove title ="Excluir prato" />
            </Form>

            <Footer />
        </Container>
    )
}