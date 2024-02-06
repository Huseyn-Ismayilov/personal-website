import Cart from "./ListItem";
import Block from "./Block";
import image from '../assets/bionluk.png'

// Images



export default function Experience() {
    return (
        <Block>
            <Cart
                title={"Freelance \nFront-End Developer"}
                date="July 2023 - Present"
                corporate="Bionluk"
                image={image}
                accomplishments={[
                    "More than 150 satisfied customers in total",
                    "I developed UI/UX (mostly Figma and XD) designs into user-friendly web interfaces.",
                    "Successfully completed projects by communicating effectively with customers and the design team."]
                }
            />
            <Cart
                title="CEO & Web developer"
                date="Dec 2021  -  May 2023"
                corporate="Cyweb agency"
                image={image}
                accomplishments={[
                    "Developed corporate and e-commerce sites with wordpress.",
                    "UI/UX designs builded with Elementor in WordPress"
                ]}
            />
        </Block>
    )
}