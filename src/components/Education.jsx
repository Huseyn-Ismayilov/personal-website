import Cart from "./ListItem";
import Block from "./Block";

// Images
import schoolImage from '../assets/school.png'
import jedAcademy from '../assets/jed-academy-logo.svg'


export default function Education() {
    return (
        <Block>
            <Cart
                title="Political Science and Public Administration"
                date="Mart 2021   - Jun 2023"
                corporate="Duzce University"
                image={schoolImage}
            />
            <Cart
                title="Front-End Development Bootcamp"
                date="July 2021"
                corporate="JED Academy"
                image={jedAcademy}
            />
        </Block>
    )
}