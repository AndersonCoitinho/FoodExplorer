import { Container, CustomFileInput, FileInputLabel, HiddenInput } from './styles';
import { AiOutlineUpload } from 'react-icons/ai'

export function InputDishPhoto({ onChange, title, ...rest }) {
    return (
        <Container>
            {title}
            <CustomFileInput>
                <FileInputLabel>
                    <AiOutlineUpload size={24}/>
                    Selecione imagem</FileInputLabel>
                <HiddenInput
                    type="file"
                    onChange={onChange}
                />
            </CustomFileInput>
        </Container>

    )
}