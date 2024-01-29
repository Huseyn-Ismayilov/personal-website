import { Link } from "react-router-dom"

export default function TopEmail(props) {
    return (
        <a
            href={props.to}
            className="text-sm font-bold"
        >
            {props.text}
        </a>
    )
}