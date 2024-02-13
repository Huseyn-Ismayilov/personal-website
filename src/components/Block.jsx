export default function Block(props) {
    return (
        <div className="relative bg-white px-7 py-9 mb-7 border border-gray-50 md:rounded-xl overflow-hidden shadow-md -mx-4 md:mx-0">
            {props.children}
        </div>
    )
}