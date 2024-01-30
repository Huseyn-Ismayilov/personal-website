export default function Block(props) {
    return (
        <div className="block relative bg-white px-7 py-9 border border-gray-50 rounded-xl shadow-md">
            {props.children}
        </div>
    )
}