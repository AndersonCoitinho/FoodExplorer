import { useState } from "react"
import { Container, Form } from "./styles";
import { Input } from '../../components/Input'
import { ButtonSign } from '../../components/ButtonSign'
import { Link, useNavigate } from 'react-router-dom'
import { api } from '../../services/api'
import LogoUserWeb from '../../assets/logo_user_web.svg';


export function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleSignUp() {
        if (!name || !email || !password) {
            return alert("Preencha todos os campos!");
        }

        api.post("/users", { name, email, password })
            .then(() => {
                alert("Usuario cadastrado com sucesso!");
                navigate("/")
            })
            .catch(error => {
                if (error.response) {
                    alert(error.response.data.message);
                } else {
                    alert("Não foi possivel cadastrar!")
                }
            });
    }


    return (
        <Container>
            <img
                src={LogoUserWeb}
                alt="Logo Food Explorer">
            </img>
            <Form>
                <h1>Crie sua conta</h1>


                <Input
                    title="Seu nome"
                    placeholder="Exemplo: Maria da Silva"
                    type="text"
                    onChange={e => setName(e.target.value)}
                />

                <Input
                    title="Email"
                    placeholder="Exemplo: exemplo@exemplo.com.br"
                    type="text"
                    onChange={e => setEmail(e.target.value)}
                />

                <Input
                    title="Senha"
                    placeholder="No minimo 6 caracteres"
                    type="password"
                    onChange={e => setPassword(e.target.value)}
                />

                <ButtonSign title="Criar conta" onClick={handleSignUp} />

                <Link to="/">
                    Já tenho uma conta
                </Link>
            </Form>
        </Container>
    )
}