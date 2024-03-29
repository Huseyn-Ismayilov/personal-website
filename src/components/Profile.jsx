import { Link } from 'react-router-dom'
import profileBg from '../assets/profile-bg.png'
import photo from '../assets/photo.png'
import SocialMedia from './SocialMedia/SocialMedia'
import ProfilePhoto from './ProfilePhoto'

export default function Profile() {
    return (
        <div className="overflow-hidden md:rounded-xl shadow-md bg-white -mx-4 md:mx-0">
            <div className="flex relative">
                <img
                    src={profileBg}
                    className='w-full h-[120px]'
                    alt=""
                />
                <div className="absolute bottom-0 left-1/2 translate-y-[50%] -translate-x-[50%] px-8">
                    <ProfilePhoto
                        src={photo}
                        active={true}
                    />
                </div>
                <Link to="/portfolio"
                    className='absolute right-8 bottom-5  items-center rounded-lg font-medium bg-white bg-opacity-95 pr-4 hover:bg-opacity-100 hidden sm:flex'
                >
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.6447 29H28.3569C30.4393 29 31.5 27.974 31.5 25.9451V16.5926C31.5 14.5635 30.4393 13.5377 28.3569 13.5377H11.6447C9.56868 13.5377 8.5 14.5635 8.5 16.5926V25.9451C8.5 27.974 9.56868 29 11.6447 29ZM14.9029 14.3173H16.665V12.6676C16.665 11.9811 17.0712 11.5978 17.7864 11.5978H22.2136C22.9288 11.5978 23.3271 11.9827 23.3271 12.6676V14.3016H25.0908V12.6677C25.0908 10.8613 24.0962 10 22.265 10H17.7235C15.974 10 14.9029 10.8613 14.9029 12.6677V14.3173Z" fill="currentColor" />
                    </svg>
                    My Portfolio
                </Link>
            </div>
            <div className="flex text-center items-center justify-center px-8 pt-11 pb-8">
                <div>
                    <h1 className='text-2xl font-bold'>I’m Huseyn Ismayilov</h1>
                    <h3 className='text-gray-400 mb-3'>I’m a Front-End developer based in Azerbaijan, Baku</h3>
                    <SocialMedia variant="variant2" />
                </div>

            </div>
        </div>
    )
}