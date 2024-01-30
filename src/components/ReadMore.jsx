import { Link } from "react-router-dom"
export default function ReadMore(props) {
    return (
        <Link to={props.to} className="inline-flex items-center font-medium gap-2 text-blue-600 hover:text-blue-700">
            Read more
            <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 10.64L5.5 6.13998L1 1.63998" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </Link>
    )
}