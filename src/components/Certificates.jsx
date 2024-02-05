import Cart from "./ListItem";
import Block from "./Block";
import image from '../assets/FreeCodeCamp.png'

// Images

export default function Certificates() {
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