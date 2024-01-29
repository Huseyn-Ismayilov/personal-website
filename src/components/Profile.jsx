import profileBg from '../assets/profile.png'
import SocialMedia from './SocialMedia'

export default function Profile() {
    return (
        <div className="container mx-auto">
            <div className="overflow-hidden rounded-xl shadow-lg">
                <div className="flex">
                    <img src={profileBg} className='w-full' alt="" />
                </div>
                <div className="flex items-center justify-between px-8 py-4">
                    <div>
                        <h1 className='text-2xl font-bold'>I’m Huseyn Ismayilov</h1>
                        <h3 className='text-gray-400 mb-3'>I’m a Front-End developer based in Azerbaijan, Baku</h3>
                        <SocialMedia />
                    </div>
                </div>
            </div>
        </div>
    )
}