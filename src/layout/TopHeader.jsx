import SocialMedia from '../components/SocialMedia'
import TopEmail from '../components/TopEmail'

export default function topHeader() {
    return (
        <div className='sticky py-3'>
            <div className="container mx-auto ">
                <div className="flex items-center justify-between">
                    <TopEmail
                        to=".//"
                        text="contact@johncarter.com"
                    />
                    <SocialMedia />
                </div>
            </div>
        </div>
    )
}