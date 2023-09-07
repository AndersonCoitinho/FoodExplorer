import { Container } from './styles.js'

import LogoFooter from '../../assets/logo_footer.svg';

export function Footer() {
    return (
        <Container>
            <img
                src={LogoFooter}
                alt="Logo Food Explorer no footer">
            </img>
            <p>© 2023 - Todos os direitos reservados.</p>
        </Container>
    )
}