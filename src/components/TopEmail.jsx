import { Link } from "react-router-dom"

export default function TopEmail(props) {
    return (
        <Link
            to={props.to}
            className="text-sm font-bold"
        >
            {props.text}
        </Link>
    )
}