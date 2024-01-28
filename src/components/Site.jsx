import { useSelector } from "react-redux";

function Site() {
    const site = useSelector((state) => state.site.dark)

    return (
        <div>
            {site ? 'yes' : 'no'}
        </div>
    )
}

export default Site