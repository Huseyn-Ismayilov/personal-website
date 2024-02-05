export default function BlockTitle(props) {
    return (
        <h2 className={`font-semibold ${props.fontSize == 'text-lg' ? "text-lg mb-2" : "text-2xl mb-4"}`}>
            {props.title}
        </h2>
    )
}