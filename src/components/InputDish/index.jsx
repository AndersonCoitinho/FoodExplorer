import { Container } from './styles';

export function InputDish({ title, ...rest }) {
    return (
        <Container>
            {title}
            <input {...rest} />
        </Container>
    )
}