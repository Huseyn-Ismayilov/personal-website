import MyStory from "../components/MyStory"
import BlockTitle from "../components/BlockTitle"
import Certificates from "../components/Certificates"
import Follow from "../components/Follow"
import SkillList from "../components/SkillsList"
import Experience from "../components/Experience"
import Education from "../components/Education"

export default function About() {
    return (
        <>
            <section className="mb-8">
                <div className="md:container mx-auto">
                    <div className="flex space-x-7">
                        <div className="w-1/2">
                            <BlockTitle
                                title="About me"
                            />
                            <MyStory />
                            <Follow />
                        </div>
                        <div className="w-1/2">
                            <BlockTitle
                                title="Certificates"
                            />
                            <Certificates />
                        </div>
                    </div>
                </div>
            </section>
            <section className="mb-12">
                <div className="md:container mx-auto">
                    <BlockTitle
                        title="Experience"
                    />
                    <SkillList />
                </div>
            </section>
            <section className="mb-8">
                <div className="md:container mx-auto">
                    <div className="flex space-x-7">
                        <div className="w-1/2">
                            <BlockTitle
                                title="Experience"
                            />
                            <Experience />
                        </div>
                        <div className="w-1/2">
                            <BlockTitle
                                title="Education"
                            />
                            <Education />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}