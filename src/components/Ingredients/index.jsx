import { Container } from "../Ingredient/styles";

export function Ingredients({ data, ...rest }) {
    return (
        <Container {...rest}>


            {
                data.ingredients &&

                <footer>
                    {data.ingredients.map(ingredient => (
                        <div key={ingredient.id}>{ingredient.name}</div>
                    ))}
                </footer>
            }


        </Container>
    )
}