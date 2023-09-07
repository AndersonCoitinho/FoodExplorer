import { Container } from './styles';

export function Input({ title, ...rest }) {
    return (
        <Container>
            {title}
            <input {...rest} />
        </Container>
    )
}