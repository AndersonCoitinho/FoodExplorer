import { Container, Form } from './styles'
import { useState } from 'react'
import { AiOutlineLeft } from 'react-icons/ai'
import { HeaderAdmin } from '../../components/HeaderAdmin'
import { Input } from '../../components/Input'
import { Footer } from '../../components/Footer'
import { NoteIngredient } from '../../components/NoteIngredient'
import { ButtonDish } from '../../components/ButtonDish'
import { Link } from 'react-router-dom'
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'

export function NewDish() {
    const [photo, setPhoto] = useState("")
    const [name, setName] = useState("")
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

    async function handleNewIngredient() {
        if (!name || !description || !value) {
            return alert("Preencha todos os campos")
        }

        if (newIngredients) {
            return alert(
                "Você deixou um ingrediente no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio."
            )
        }

        const dish_id = await api.post("/plates", {
            name,
            description,
            value,
            ingredients
        });
        console.log("antes")
        //console.log(response.data)
        console.log(dish_id)
        console.log("depois")
        /*const id = response.data.foodplates_id

        if (photo) {
            const fileUploadForm = new FormData()
            fileUploadForm.append('photo', photo)

            await api.patch(`plates/photo/${id}`, fileUploadForm)
        }
        */
        alert("Prato Cadastrado");
        //navigate("/")
    }


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
                        onChange={e => setPhoto(e.target.value)}
                    />

                    <Input
                        title="Nome"
                        placeholder="Ex.: Salada Ceasar"
                        type="text"
                        onChange={e => setName(e.target.value)}
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

                <Input
                    title="Preço"
                    placeholder="R$ 00,00"
                    type="text"
                    onChange={e => setValue(e.target.value)}
                />

                <Input
                    title="Descrição"
                    placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                    type="text"
                    onChange={e => setDescription(e.target.value)}
                />

                <ButtonDish
                    title="Salvar alterações"
                    onClick={handleNewIngredient}
                />
            </Form>

            <Footer />
        </Container>
    )
}