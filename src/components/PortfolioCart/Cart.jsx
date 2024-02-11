export default function Cart({ image, title, desc, link }) {
    return (
        <div className="portfolioCart">
            <div className="rounded-3xl overflow-hidden mb-3 relative">
                <img src={image} className='transition-all' alt="" />
                <div className="overlay opacity-0 transition-all absolute inset-0 flex items-center justify-center bg-black/60">
                    <a href={link} className="btn transition-all flex items-center justify-center">
                        <span className="text-xl font-medium text-white">Visit website</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" viewBox="0 0 24 24" fill="none">
                            <path opacity="0.5" d="M5.46967 17.4697C5.17678 17.7626 5.17678 18.2374 5.46967 18.5303C5.76256 18.8232 6.23744 18.8232 6.53033 18.5303L5.46967 17.4697ZM6.53033 18.5303L18.5303 6.53033L17.4697 5.46967L5.46967 17.4697L6.53033 18.5303Z" fill="white" />
                            <path d="M9 6H18V15" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                </div>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-black">{title}</h3>
                <p className='text-gray-400'>{desc}</p>
            </div>
        </div>
    )
}
