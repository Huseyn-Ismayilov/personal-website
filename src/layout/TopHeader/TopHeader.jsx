import SocialMedia from '../../components/SocialMedia/TopSocialMedia'
import TopEmail from '../../components/TopEmail'

export default function topHeader() {
    return (
        <div className='py-8'>
            <div className="container mx-auto ">
                <div className="flex items-center justify-between">
                    <TopEmail
                        to="mailto:i.huseynn0@gmail.com"
                        text="i.huseynn0@gmail.com"
                    />
                    <SocialMedia />
                </div>
            </div>
        </div>
    )
}