import { NavLink } from "react-router-dom"

export default function NavBar() {
    return (
        <div className="flex items-center gap-5 p-2">
            <NavLink to="/"></NavLink>
        </div>
    )
}