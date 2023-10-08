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
    const [result, setResult] = useState({});
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [photo, setPhoto] = useState('')
    const [value, setValue] = useState('')
    const [category, setCategory] = useState('')

    const params = useParams();
    const plates_id = params.plates_id


    useEffect(() => {
        async function fetchPlates() {
            try {
                const response = await api.get(`/plates/${plates_id}`);
                const plateData = response.data.plates;
                if (plateData) {
                    setResult(plateData);
                    setTitle(plateData.name);
                    setDescription(plateData.description);
                    setValue(plateData.value);
                } else {
                    console.error("Plate datas is undefined");
                }
            } catch (error) {
                console.error("Error fetching plate data:", error);
            }
        }
        fetchPlates();
    }, [plates_id]);





    return (
        <Container>
            <HeaderAdmin />
            <a href="/">
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
                        onChange={(e) => setTitle(e.target.value)}
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


                

                <Input
                    title="Preço"
                    placeholder="R$ 00,00"
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />

                <Input
                    title="Descrição"
                    placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <ButtonDish title="Salvar alterações" />
                <ButtonRemove title="Excluir prato" />
            </Form>

            <Footer />
        </Container>
    )
}