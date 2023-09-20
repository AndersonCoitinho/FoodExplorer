import { Container } from './styles'

export function ButtonSign({title, ...rest}) {
    return (
        <Container 
        type="button" {...rest}>
            {title}
        </Container>
    )
}
