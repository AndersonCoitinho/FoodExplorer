import { Container, Form } from "./styles";
import { Input } from '../../components/Input'
import { ButtonSign } from '../../components/ButtonSign'
import { Link } from 'react-router-dom'

import LogoUserWeb from '../../assets/logo_user_web.svg';


export function SignIn() {
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
                />

                <Input
                    title="Senha"
                    placeholder="No minimo 6 caracteres"
                    type="password"
                />

                <ButtonSign title="Entrar" />

                <Link to="/register">
                    Criar uma conta
                </Link>
            </Form>
        </Container>
    )
}