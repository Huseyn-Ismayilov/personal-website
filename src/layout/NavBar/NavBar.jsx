import { NavLink } from "react-router-dom"
import { useModal } from "../../context/ModalContext";

const LinkItems = [
    {
        text: "Home",
        to: "/",
        icon: (<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">                    <path d="M2.70553 18.8827H16.2943C17.7239 18.8827 18.8826 17.724 18.8826 16.2944V8.12661C18.8826 7.16336 18.4091 6.26156 17.6162 5.71479L11.1632 1.26445C10.1619 0.573879 8.83795 0.573879 7.83646 1.26445L1.38362 5.71479C0.590662 6.26156 0.117188 7.16336 0.117188 8.12661V16.2944C0.117188 17.724 1.27607 18.8827 2.70553 18.8827Z" fill="currentColor" />                    <path d="M11.9751 15.7442H7.48486" stroke="white" strokeWidth="1.66667" strokeLinecap="round" />                </svg>)
    },
    {
        text: "About",
        to: "/about",
        icon: (<svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.30731 19H15.6944C16.8253 19 17.5 18.4405 17.5 17.5114C17.5 14.8072 14.2177 11.088 8.99591 11.088C3.78417 11.088 0.5 14.8072 0.5 17.5114C0.5 18.4405 1.17648 19 2.30731 19ZM9.00409 9.22189C11.1971 9.22189 13.0629 7.18497 13.0629 4.55169C13.0629 1.96888 11.1916 0 9.00409 0C6.81666 0 4.94705 2.00331 4.94705 4.57081C4.94705 7.18497 6.80472 9.22189 9.00409 9.22189Z" fill="currentColor" /></svg>)
    },
    {
        text: 'Porfolio',
        to: '/portfolio',
        icon: (<svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.64474 19H20.3569C22.4393 19 23.5 17.974 23.5 15.9451V6.59262C23.5 4.56355 22.4393 3.53767 20.3569 3.53767H3.64474C1.56868 3.53767 0.5 4.56355 0.5 6.59262V15.9451C0.5 17.974 1.56868 19 3.64474 19ZM6.90294 4.31731H8.665V2.6676C8.665 1.98107 9.0712 1.59777 9.78638 1.59777H14.2136C14.9288 1.59777 15.3271 1.98271 15.3271 2.6676V4.3016H17.0908V2.66773C17.0908 0.861333 16.0962 0 14.265 0H9.72351C7.97398 0 6.90294 0.861333 6.90294 2.66773V4.31731Z" fill="currentColor" /></svg>)
    },
]


export default function NavBar() {

    const { openModal } = useModal();

    return (
        <div className="fixed bottom-10 left-1/2 -translate-x-[50%] shadow-md">
            <div className="flex items-center gap-5 p-4 border border-gray-300 rounded-xl backdrop-blur-sm bg-white/60">
                {LinkItems.map((item, index) => (
                    <NavLink
                        key={index}
                        to={item.to}
                        preventScrollReset={true}
                    >
                        {({ isActive }) => (
                            <div className={`text-[#0000004a] flex items-center justify-center w-11 h-11 rounded-lg border border-transparent ${isActive ? "bg-gray-100 border-gray-200 hover:border-gray-200" : ""}`}>
                                {item.icon}
                            </div>
                        )}
                    </NavLink>
                ))}
                <button onClick={openModal} className="flex items-center justify-center w-11 h-11 bg-gray-500 hover:bg-black rounded-lg">
                    <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.88911 0.333313C1.10155 0.333313 0.439439 0.852646 0.207883 1.57009C0.140883 1.77787 0.249661 1.99287 0.434217 2.10942L8.69733 7.32576C8.88233 7.44253 9.11811 7.44253 9.30311 7.32576L17.5662 2.10942C17.7508 1.99287 17.8596 1.77787 17.7926 1.57009C17.561 0.852646 16.8989 0.333313 16.1113 0.333313H1.88911ZM0.981551 4.25176C0.603773 4.0132 0.111328 4.28476 0.111328 4.73153V12.9046C0.111328 13.8969 0.906884 14.7005 1.88911 14.7005H16.1113C17.0936 14.7005 17.8891 13.8969 17.8891 12.9046V4.73153C17.8891 4.28476 17.3967 4.0132 17.0189 4.25176L9.47066 9.01642C9.18266 9.19787 8.81777 9.19787 8.52977 9.01642L0.981551 4.25176Z" fill="#D9D9D9" />
                    </svg>
                </button>


            </div>
        </div>

    )
}