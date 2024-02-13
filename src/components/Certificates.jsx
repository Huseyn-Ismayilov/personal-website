import Cart from "./ListItem";
import Block from "./Block";
import FreeCodeCamp from '../assets/FreeCodeCamp.png'
import Ibm from '../assets/ibm-logo.png'
import codeCademy from '../assets/codeCademy-logo.png'
import udemy from '../assets/udemy-logo.png'

// Images

export default function Certificates() {
    return (
        <Block>
            <Cart
                title="Front End Development Libraries"
                date="July 2024"
                corporate="freeCodeCamp"
                image={FreeCodeCamp}
            />
            <Cart
                title="Intermediate Web and Front-End Development"
                date="Dec 2023"
                corporate="IBM"
                image={Ibm}
            />
            <Cart
                title="React Course"
                date="Dec 2023"
                corporate="Codecademy"
                image={codeCademy}
            />
            <Cart
                title="30 Different Web Projects in 30 Days | HTML, CSS & JS"
                date="July 2023"
                corporate="Udemy"
                image={udemy}
            />
            <Cart
                title="Ethical Hacking and Penetration Testing with Kali Linux"
                date="Aug 2021"
                corporate="Udemy"
                image={udemy}
            />

        </Block>
    )
}