import { useSelector } from "react-redux";

function Site() {
    const site = useSelector((state) => state.theme.isDark)
    console.log(site);
    return (
        <div>
            {site ? 'yes' : 'no'}
            <h1 className=""></h1>
        </div>
    )
}

export default Site