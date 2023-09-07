import { Container, Form } from "./styles";
import { Input } from '../../components/Input'
import { ButtonSign } from '../../components/ButtonSign'


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
                    placeholder="Exemplo: exemplo@exemplo.com.br"
                    type="text"
                />

                <ButtonSign title="Entrar"/>

                Criar uma conta
            </Form>
        </Container>
    )
}