import { Container } from "../Ingredient/styles";
import { Ingredient } from "../Ingredient"

export function Ingredients({ title, ...rest }) {
    return (
        <Container {...rest}>
            {title}
        </Container>
    )
}