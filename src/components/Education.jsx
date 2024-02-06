import Cart from "./ListItem";
import Block from "./Block";
import image from '../assets/school.png'

// Images

export default function Education() {
    return (
        <Block>
            <Cart
                title="Front End Development Libraries"
                date="July 2023"
                corporate="freeCodeCamp"
                image={image}
            />
            <Cart
                title="Front End Development Libraries"
                date="July 2023"
                corporate="freeCodeCamp"
                image={image}
            />
            <Cart
                title="Front End Development Libraries"
                date="July 2023"
                corporate="freeCodeCamp"
                image={image}
            />
            <Cart
                title="Front End Development Libraries"
                date="July 2023"
                corporate="freeCodeCamp"
                image={image}
            />
            <Cart
                title="Front End Development Libraries"
                date="July 2023"
                corporate="freeCodeCamp"
                image={image}
            />
        </Block>
    )
}