import ProfilePhoto from "./ProfilePhoto"
import photo from '../assets/photo.png'
import Block from "./Block"
import BlockTitle from "./BlockTitle"

export default function MyStory() {
    return (
        <Block>
            <ProfilePhoto
                src={photo}
                className="mb-3"
            />
            <BlockTitle
                title="My story"
                fontSize="text-lg"
            />
            <p className="text-gray-400 leading-6">I am 20 years old an accomplished front-end developer with a rich background in web development. Close to 3 years of hands-on experience, I have successfully collaborated with diverse clients as a seasoned freelancer. My proficiency extends across the spectrum of web development and design, where I have honed my skills in creating visually appealing and user-friendly interfaces. I am an accomplished front-end developer with a rich background in web development. Close to 3 years of </p>
        </Block>
    )
}