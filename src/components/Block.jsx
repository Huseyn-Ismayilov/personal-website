export default function Block(props) {
    return (
        <div className="block bg-white px-7 py-9 border border-gray-50 rounded-xl shadow-lg">
            {props.children}
        </div>
    )
}