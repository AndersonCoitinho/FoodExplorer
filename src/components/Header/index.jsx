import { Container, Navbar, Logout, Input } from './style';
import { PiSignOut } from 'react-icons/pi'
import { AiOutlineSearch } from 'react-icons/ai'

import LogoUserWeb from '../../assets/logo_user_web.svg';
import { ButtonHeader } from '../ButtonHeader';
import { Search } from '../Search';

export function Header() {
  return (
    <Container>
      <Navbar>
        <img
          src={LogoUserWeb}
          alt="Logo Food Explorer">
        </img>
        <ButtonHeader title="Pedidos (0)" />

        <Input>
          <Search placeholder="Busque por pratos ou ingredientes" icon={AiOutlineSearch} />
        </Input>

        <Logout>
          <PiSignOut />
        </Logout>


      </Navbar>
    </Container>
  )
}