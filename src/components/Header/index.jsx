import { Container, Logo, Navbar } from './style';

import LogoUserWeb from '../../assets/logo_user_web.svg';

export function Header() {
  return (
    <Container>
      <Navbar>
        <Logo>
          <img
            src={LogoUserWeb}
            alt="Logo Food Explorer">
          </img>
        </Logo>
      </Navbar>
    </Container>
  )
}