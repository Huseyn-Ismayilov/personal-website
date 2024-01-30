import Profile from "../components/Profile"
import SkillList from "../components/SkillsList"
import Block from "../components/Block"
import BlockTitle from "../components/BlockTitle"
import ReadMore from "../components/ReadMore"

export default function Home() {
    return (
        <>
            <section className="mb-14">
                <div className="container mx-auto">
                    <Profile />
                </div>
            </section>
            <section className="mb-14">
                <div className="container mx-auto">
                    <BlockTitle title="About me" />
                    <div className="md:flex md:space-x-7">
                        <div className="md:w-1/2">
                            <Block>
                                <BlockTitle title="More about me" fontSize="text-lg" />
                                <p className="line-clamp-5 text-gray-400 mb-4 leading-6">I am 20 years old an accomplished front-end developer with a rich background in web development. Close to 3 years of hands-on experience, I have successfully collaborated with diverse clients as a seasoned freelancer. My proficiency extends across the spectrum of web development and design, where I have honed my skills in creating visually appealing and user-friendly interfaces. I am an accomplished front-end developer with a rich background in web development. Close to 3 years of </p>
                                <ReadMore to="/about" />
                            </Block>
                        </div>
                        <div className="md:w-1/2">
                            <Block>
                                <BlockTitle title="My Skills" fontSize="text-lg" />
                                <SkillList />
                            </Block>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}