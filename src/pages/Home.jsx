import Site from "../components/Site"
import SiteButton from "../components/SiteButton"
import SocialMedia from "../components/SocialMedia"

export default function Home() {
    return (
        <section>
            <div className="container mx-auto">
                <Site />
                <SiteButton />
                <SocialMedia />
            </div>
        </section>
    )
}