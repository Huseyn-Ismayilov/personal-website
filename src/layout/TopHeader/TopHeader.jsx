import SocialMedia from '../../components/SocialMedia/SocialMedia'
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
                    <SocialMedia variant="variant1" />
                </div>
            </div>
        </div>
    )
}