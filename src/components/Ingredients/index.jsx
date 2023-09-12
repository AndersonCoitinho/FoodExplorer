import { Container } from "../Ingredient/styles";
import { Ingredient } from "../Ingredient"

export function Ingredients({ data, ...rest }) {
    return (
        <Container {...rest}>

            {
                data.tags &&
                <footer>
                    {
                        data.tags.map(ingredient => <Ingredient key={ingredient.id} title={ingredient.name} />)
                    }
                </footer>
            }

        </Container>
    )
}