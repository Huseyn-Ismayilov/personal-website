import MyStory from "../components/MyStory"
import BlockTitle from "../components/BlockTitle"
import Certificates from "../components/Certificates"
import Follow from "../components/Follow"

export default function About() {
    return (
        <section>
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
    )
}