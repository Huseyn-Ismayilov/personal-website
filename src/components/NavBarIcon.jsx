export default function NavBarIcon(props) {
    return (
        <div className={`flex items-center justify-center w-10 h-10 rounded-lg ${props.className ? props.children : ""}`}>
            {props.children}
        </div>
    )
}