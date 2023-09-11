import { Container } from "../Ingredient/styles";

export function Ingredients({ data, ...rest }) {
    return (
        <Container {...rest}>

            {
                data.tags &&

                <footer>
                    {data.tags.map(ingredient => (
                        <div key={ingredient.id}>{ingredient.name}</div>
                    ))}
                </footer>
            }

        </Container>
    )
}