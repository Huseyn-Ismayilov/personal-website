import { useDispatch } from "react-redux"
import { setDarkMode } from "../features/themeTest"

function SiteButton() {
    const dispatch = useDispatch()

    return (
        <button
            type="button"
            onClick={() => dispatch(setDarkMode())}
        >
            Toggle button
        </button>
    )
}

export default SiteButton