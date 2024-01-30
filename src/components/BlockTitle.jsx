export default function BlockTitle(props) {
    return (
        <h2 className={`font-semibold mb-4 ${props.fontSize == 'text-lg' ? "text-lg" : "text-2xl"}`}>
            {props.title}
        </h2>
    )
}