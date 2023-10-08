import { Container, Form } from "./styles";
import { useState } from 'react'
import { Input } from '../../components/Input'
import { ButtonSign } from '../../components/ButtonSign'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
import LogoUserWeb from '../../assets/logo_user_web.svg';


export function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { signIn } = useAuth();

    function handleSignIn() {
        signIn({email, password})
    }

    return (
        <Container>
            <img
                src={LogoUserWeb}
                alt="Logo Food Explorer">
            </img>
            <Form>
                <h1>Faça login</h1>


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

                <ButtonSign title="Entrar" onClick={handleSignIn} />

                <Link to="/register">
                    Criar uma conta
                </Link>
            </Form>
        </Container>
    )
}