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
import { useNavigate } from 'react-router-dom';


export function EditDish() {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')
    const [category, setCategory] = useState('')

    const params = useParams();
    const plates_id = params.plates_id
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchPlates() {
            try {
                const response = await api.get(`/plates/${plates_id}`);
                const plateData = response.data.plates;
                if (plateData) {
                    setName(plateData.name);
                    setDescription(plateData.description);
                    setValue(plateData.value);
                    setCategory(plateData.category)
                } else {
                    console.error("Dados indefinidos");
                }
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
            }
        }
        fetchPlates();
    }, [plates_id]);

    async function handleRemove() {
        const confirm = window.confirm("Deseja realmente remover o prato?");

        if (confirm) {
            await api.delete(`/plates/${plates_id}`);
            navigate(-1)
        }

    }

    async function updateDish() {
        console.log(`/plates/${plates_id}`)
        try {
            await api.put(`/plates/${plates_id}`, {
                name,
                description,
                value,
                category
            })
            alert("Alterado o prato com sucesso")
            navigate(-1)
        } catch (error) {
            console.error("Atençao: ", error)
        }
    }

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
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <div className='category'>
                        Categoria
                        <select
                            id="categoria"
                            name="categoria"
                            value={category} 
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value="Refeicao">Refeição</option>
                            <option value="Sobremesa">Sobremesa</option>
                            <option value="Bebida">Bebida</option>
                        </select>
                    </div>
                </div>




                <Input
                    title="Preço"
                    placeholder="R$ 00,00"
                    type="text"
                    value={formatCurrency(value)}
                    onChange={(e) => {
                        // Remove todos os caracteres não numéricos
                        const numericValue = e.target.value.replace(/\D/g, '');
                        // Atualiza o estado apenas com os números
                        setValue(numericValue);
                    }}
                />

                <Input
                    title="Descrição"
                    placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <ButtonDish
                    onClick={updateDish}
                    title="Salvar alterações"
                />
                <ButtonRemove
                    onClick={handleRemove}
                    title="Excluir prato"
                />
            </Form>

            <Footer />
        </Container>
    )
}