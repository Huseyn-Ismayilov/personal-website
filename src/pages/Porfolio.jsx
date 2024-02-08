import Block from "../components/Block"
import { Link } from "react-router-dom"
export default function Porfolio() {
    return (
        <>
            <div className="container mx-auto">
                <Block>
                    <div className="flex justify-between items-center bg-white">
                        <div>
                            <h1 className="text-3xl font-semibold mb-2">Where Creativity Meets Code</h1>
                            <p className="max-w-[420px] text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit aliquam
                                et erat donec pulvinar enim potenti etiam at quis volutpat.
                            </p>
                        </div>
                        <div>
                            <Link to="" className="flex items-center gap-2 px-4 py-3 font-medium border border-gray-300 rounded-md">
                                <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.98994 0.846375C1.20238 0.846375 0.540269 1.36571 0.308713 2.08315C0.241713 2.29093 0.350491 2.50593 0.535047 2.62249L8.79816 7.83882C8.98316 7.9556 9.21894 7.9556 9.40394 7.83882L17.667 2.62249C17.8516 2.50593 17.9604 2.29093 17.8934 2.08315C17.6618 1.36571 16.9997 0.846375 16.2122 0.846375H1.98994ZM1.08238 4.76482C0.704603 4.52626 0.212158 4.79782 0.212158 5.2446V13.4177C0.212158 14.4099 1.00771 15.2136 1.98994 15.2136H16.2122C17.1944 15.2136 17.9899 14.4099 17.9899 13.4177V5.2446C17.9899 4.79782 17.4975 4.52626 17.1197 4.76482L9.57149 9.52949C9.28349 9.71093 8.9186 9.71093 8.6306 9.52949L1.08238 4.76482Z" fill="#D9D9D9" />
                                </svg>
                                Contact
                            </Link>
                        </div>
                    </div>
                </Block>

            </div>
        </>
    )
}