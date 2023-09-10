import { Container, Navbar, Logout, Input } from './style';
import { PiSignOut } from 'react-icons/pi'
import { AiOutlineSearch } from 'react-icons/ai'

import LogoAdminWeb from '../../assets/logo_admin_web.svg';
import { ButtonHeader } from '../ButtonHeader';
import { Search } from '../Search';

export function HeaderAdmin() {
  return (
    <Container>
      <Navbar>
        <img
          src={LogoAdminWeb}
          alt="Logo Food Explorer">
        </img>

        <Input>
          <Search placeholder="Busque por pratos ou ingredientes" icon={AiOutlineSearch} />
        </Input>

        <ButtonHeader title="Novo Prato" />

        <Logout>
          <PiSignOut />
        </Logout>


      </Navbar>
    </Container>
  )
}