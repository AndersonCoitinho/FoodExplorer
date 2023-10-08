import { Container, Navbar, Logout, Input } from './style';
import { PiSignOut } from 'react-icons/pi'
import { AiOutlineSearch } from 'react-icons/ai'
import { useAuth } from '../../hooks/auth'
import LogoUserWeb from '../../assets/logo_user_web.svg';
import { ButtonHeader } from '../ButtonHeader';
import { Search } from '../Search';
import { useNavigate } from 'react-router-dom';

export function Header() {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut();
    navigate('/'); 
  };

  return (
    <Container>
      <Navbar>
        <img
          src={LogoUserWeb}
          alt="Logo Food Explorer">
        </img>

        <Input>
          <Search placeholder="Busque por pratos ou ingredientes" icon={AiOutlineSearch} />
        </Input>

        <ButtonHeader title="Pedidos (0)" />

        <Logout onClick={handleSignOut}>
          <PiSignOut />
        </Logout>


      </Navbar>
    </Container>
  )
}