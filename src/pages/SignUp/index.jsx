import { Container, Form } from "./styles";
import { Input } from '../../components/Input'
import { ButtonSign } from '../../components/ButtonSign'
import { Link } from 'react-router-dom'

import LogoUserWeb from '../../assets/logo_user_web.svg';


export function SignUp() {
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
                />

                <Input
                    title="Email"
                    placeholder="Exemplo: exemplo@exemplo.com.br"
                    type="text"
                />

                <Input
                    title="Senha"
                    placeholder="No minimo 6 caracteres"
                    type="password"
                />

                <ButtonSign title="Criar conta" />

                <Link to="/">
                    Já tenho uma conta
                </Link>
            </Form>
        </Container>
    )
}