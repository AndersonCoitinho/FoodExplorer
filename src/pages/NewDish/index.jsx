import { Container, Form, Lad, Sup } from './styles'
import { useState } from 'react'
import { AiOutlineLeft } from 'react-icons/ai'
import { HeaderAdmin } from '../../components/HeaderAdmin'
import { InputDish } from '../../components/InputDish'
import { Footer } from '../../components/Footer'
import { NoteIngredient } from '../../components/NoteIngredient'
import { ButtonDish } from '../../components/ButtonDish'
import { Link } from 'react-router-dom'
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'


export function NewDish() {
    const [photo, setPhoto] = useState("")
    const [name, setName] = useState("")
    const [category, setCategory] = useState(null)
    const [description, setDescription] = useState("")
    const [value, setValue] = useState("")

    const [ingredients, setIngredients] = useState([])
    const [newIngredients, setNewIngredients] = useState("")

    const navigate = useNavigate();

    function hangleAddIngredient() {
        setIngredients(prevState => [...prevState, newIngredients]);
        setNewIngredients("");
    }

    function hangleRemoveIngredient(deleted) {
        setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted));
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

    async function handleNewIngredient() {
        if (!name || !description || !value || !photo) {
            return alert("Preencha todos os campos")
        }

        if (category === null) {
            return alert("Selecione a categoria do prato")
        }

        if (ingredients.length === 0) {
            return alert("Inserir no minimo um ingrediente do prato")
        }

        if (newIngredients) {
            return alert(
                "Você deixou um ingrediente no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio."
            )
        }

        const response = await api.post("/plates", {
            name,
            description,
            category,
            value,
            ingredients
        });

        const dish_id = response.data;

        if (photo) {
            const fileUploadForm = new FormData()
            fileUploadForm.append('photo', photo)

            await api.patch(`plates/photo/${dish_id}`, fileUploadForm)
        }

        alert("Prato Cadastrado");
        navigate("/")
    }

    function handleBack(){
        navigate(-1)
    }


    return (
        <Container>
            <HeaderAdmin />
            <Sup>
                <button type='button' onClick={handleBack}>
                    <AiOutlineLeft />
                    voltar
                </button>
                <h1>Adicionar prato</h1>
            </Sup>
            <Form>
                <div className="form-row">
                    <InputDish
                        title="Imagem do prato"
                        type="file"
                        onChange={e => setPhoto(e.target.files[0])}
                    />

                    <InputDish
                        title="Nome"
                        placeholder="Ex.: Salada Ceasar"
                        type="text"
                        onChange={e => setName(e.target.value)}
                    />

                    <div className='category'>
                        Categoria
                        <select id="categoria" name="categoria" onChange={e => setCategory(e.target.value)}>
                            <option value="null">Selecione uma opção</option>
                            <option value="Refeicao">Refeição</option>
                            <option value="Sobremesa">Sobremesa</option>
                            <option value="Bebida">Bebida</option>
                        </select>
                    </div>
                </div>

                <div className="ingredient">
                    {
                        ingredients.map((ingredient, index) => (
                            <NoteIngredient
                                key={String(index)}
                                value={ingredient}
                                onClick={() => hangleRemoveIngredient(ingredient)}
                            />
                        ))
                    }
                    <NoteIngredient
                        $isNew
                        placeholder="Adicionar"
                        value={newIngredients}
                        onChange={e => setNewIngredients(e.target.value)}
                        onClick={hangleAddIngredient}
                    />
                </div>

                <InputDish
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

                <InputDish
                    title="Descrição"
                    placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                    type="text"
                    onChange={e => setDescription(e.target.value)}
                />

                <Lad>
                    <ButtonDish
                        title="Salvar alterações"
                        onClick={handleNewIngredient}
                    />
                </Lad>
            </Form>

            <Footer />
        </Container>
    )
}